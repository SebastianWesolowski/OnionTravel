/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
const chromeLauncher = require('chrome-launcher');
const { test } = require('ava');
const lighthouse = require('lighthouse');
const { siteUrl } = require('../site-config');

const launchChromeAndRunLighthouse = (url, opts = { chromeFlags: ['--headless'] }, config = null) =>
  chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => chrome.kill().then(() => results.lhr));
  });

let scores;
test.before(async () => {
  console.log(`Auditing ${siteUrl}.\n`);
  scores = await launchChromeAndRunLighthouse(siteUrl).then(({ categories }) => categories);
});

const logScore = score => `Is ${score * 100}.`;

test('Performance Score above 40', t => {
  const { score } = scores.performance;
  t.log(logScore(score));
  score >= 0.4 ? t.pass() : t.fail();
});

test('PWA Score above 40', t => {
  const { score } = scores.pwa;
  t.log(logScore(score));
  score >= 0.4 ? t.pass() : t.fail();
});

test('Accessibility Score above 40', t => {
  const { score } = scores.accessibility;
  t.log(logScore(score));
  score >= 0.4 ? t.pass() : t.fail();
});

test('Best Practices Score above 40', t => {
  const { score } = scores['best-practices'];
  t.log(logScore(score));
  score >= 0.4 ? t.pass() : t.fail();
});

test('SEO Score above 40', t => {
  const { score } = scores.seo;
  t.log(logScore(score));
  score >= 0.4 ? t.pass() : t.fail();
});

# [shiki-codetohtml-issue](https://github.com/okayurisotto/shiki-codetohtml-issue)

A minimal reproducible example for [shikijs/shiki#1089](https://github.com/shikijs/shiki/issues/1089).

## Actual behavior

When calling `codeToHtml` for the first time with an invalid `lang` option, subsequent calls to `codeToHtml` will continue to fail even if valid languages are provided afterwards.

## Expected behavior

If `codeToHtml` is called with an invalid language, that call should fail, but subsequent calls with valid options should succeed.

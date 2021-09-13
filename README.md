# next-front

HUSKY 사용방법

```bash
$ git add .
$ git commit -m "commit message"

...
$.husky/pre-commit: 3: .husky/_/husky.sh: Permission denied
$ chmod a+x .husky/pre-commit
$ chmod a+x .husky/pre-push
$ chmod -R 755 ./.husky
...

```

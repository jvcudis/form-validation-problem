FROM node:10-alpine

LABEL "com.github.actions.name"="Execute Test"
LABEL "com.github.actions.description"="Executes unit tests"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="purple"

LABEL "repository"="https://github.com/jvcudis/form-validation-problem"
LABEL "homepage"="https://www.anncudis.com/form-validation-problem"
LABEL "maintainer"="Ann Cudis <jvcudis@gmail.com>"

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

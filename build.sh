if [[ -d web-ext-artifacts ]]; then
  rm -r web-ext-artifacts
fi
web-ext build -s src

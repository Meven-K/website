# Front for the website

About the app : [App](./README.app.md)

About Ddocker : [Readme](./README.docker.md)

## Setup Proxy :

### Set proxy

```sudo mkdir -p /etc/systemd/system/docker.service.d```

```sudo vi /etc/systemd/system/docker.service.d/proxy.conf```

```
[Service]
Environment="HTTP_PROXY=http://{PROXY}:{PORT}"
Environment="HTTPS_PROXY=http://{PROXY}:{PORT}"
```

```sudo systemctl daemon-reload```

```sudo systemctl restart docker.service```

### Test proxy

```docker build -f Dockerfile.test .```

```docker run {id_container}```

## Launch the app
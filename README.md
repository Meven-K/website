# Front for the website

About the app : [App](./README.app.md)

About Ddocker : [Readme](./README.docker.md)

## Setup env

### Installations

Install vscode, git ``` sudo apt install git ```, and clone the project. Install docker with :

```
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update
sudo apt install docker-ce
```

Configure docker

```
sudo usermod -aG docker ${USER}
su - ${USER}
id -nG
sudo usermod -aG docker ${USER}
```

Install docker-compose:

```
sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```


### Setup Proxy :

```sudo mkdir -p /etc/systemd/system/docker.service.d```

```sudo nano /etc/systemd/system/docker.service.d/proxy.conf```

```
[Service]
Environment="HTTP_PROXY=http://{PROXY}:{PORT}"
Environment="HTTPS_PROXY=http://{PROXY}:{PORT}"
```

```sudo systemctl daemon-reload```

```sudo systemctl restart docker.service```

### Test docker and proxy

```docker build -f Dockerfile.test.proxy .```

```docker run {id_container}```

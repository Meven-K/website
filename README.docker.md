# Docker

Some interesting commands about docker

## Create and launch a container

```
docker build -t {dockerfile_path} .
docker run {container_id}
docker kill {container_id}
```

## Connect to a container

```
docker ps -a
docker exec -it {container_id} absh
exit
```
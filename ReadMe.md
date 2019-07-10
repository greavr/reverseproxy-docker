# Nginx Reverse Proxy Container

The basic data design is:

Nginx Reverse Proxy on port 80 --> 
Forwarding to a NodeJS container listening on port 8080 -->
Making a Sync request call against a Python container listening on port 5000

Docker network DNS configured in [docker-composer.yaml](docker-composer.yaml) file

# Build all containers:
```
docker build -t nginx-reverseproxy nginx/
docker build -t nodejs-container Nodejs/
docker build -t python-container Python/
```
## Or you can run:
```
docker-compose build 
```
# Run environment:
```
docker-compose up -d
```
# Stop environment
```
docker-composer down
```

# How to test each environment:
```
# NodeJS Container must be built first
docker run -p 8080:8080 -d nodejs-container


# Python Container must be built first
docker run -p 5000:5000 -d python-container
```

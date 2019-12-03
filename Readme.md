# How run server

## Download image and run the server

The container will be destroyed when you close it with *Ctrl-C*
The image don't

```sh
docker run -p 49160:8080 -it --rm --name node_logger frienddementor/general_logger
```

## Remove image
```
docker rmi -f frienddementor/general_logger
```

# How to contribute

You can make changes and later build the new image to test

## Build image
```sh
docker build -t frienddementor/general_logger .
```

If you think that the changes should be added to the public image
feel free to create a pull request

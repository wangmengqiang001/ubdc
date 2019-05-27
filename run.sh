docker run -d -p 8091:80 -v $PWD:/usr/share/nginx/html -name test_ubdc nginx && docker logs -f test_ubdc

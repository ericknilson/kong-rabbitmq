## Instructions
1. Add this line in your /etc/hosts:
```
127.0.0.1       host.docker.internal
```

2. Access the ./exemplo-rabbitmq directory and run:
```sh
docker compose up
```

3. In other terminal, access the ./kong directory and run:
```sh
docker compose up
```

4. Install REST Client extention in your VSCODE;

5. Use the ./http/publish.http file to test.

6. Access Kong Manage OSS to configure in:
```
http://localhost:8002
```

7.  Requests should be sent to:
```
http://localhost:8001
```

8. Mode details, see https://www.youtube.com/watch?v=uY_cp41E7SU
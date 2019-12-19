def file_name():
    log_file = open('/etc/httpd/logs/access_log', 'r').readlines()
    for line in log_file:
        parts = line.split()
        if (parts[6] is not None):
            yield(parts[6])
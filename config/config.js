{
    "development": {
        "username": "root",
            "password": "blank",
                "database": "burger_db",
                    "host": "127.0.0.1",
                        "port": 3306,
                            "dialect": "mysql"
    },
    "test": {
        "username": "root",
            "password": null,
                "database": "database_test",
                    "host": "127.0.0.1",
                        "port": 3306,
                            "dialect": "mysql"
    },
    "production": {
        "username": "root",
            "password": "blank",
                "database": "database_production",
                    "host": "127.0.0.1",
                        "port": 3306,
                            "dialect": "mysql",
                                "use_env_variable": "JAWSDB_URL"
    }
}
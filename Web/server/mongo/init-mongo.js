db.createUser(
    {
        user  : "cdc",
        pwd   : "cdcpass",
        roles : [
            {
                role : "readWrite",
                db : "pgcdc_db"
            }
        ]
    }
)
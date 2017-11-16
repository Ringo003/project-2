create database exoplanet_db;
        use exoplanet_db;
        create table exosale(
        rowid int(11) not null primary key,
        st_dist float(15) not null default 0.0,
        pl_name varchar(255),
        pl_masseerr1 float(15) not null default 0.0,
        st_actlx float(15) not null default 0.0,
        sold tinyint(1) not null default 0.0
        );
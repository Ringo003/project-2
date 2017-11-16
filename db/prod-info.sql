create table product_info(
        rowid int(11) not null primary key,
        pl_hostname varchar(255) not null,
        pl_pnum int(11) not null,
        pl_orbper FLOAT(15) not null default 0.0,
        pl_denserr1 FLOAT(15) not null default 0.0,
        st_dist FLOAT(15) not null default 0.0,
        st_teff FLOAT(15) not null default 0.0,
        st_mass FLOAT(15) not null default 0.0,
        rowupdate varchar(255),
        pl_name varchar(255),
        pl_eqt int(11) default 0.0,
        pl_masseerr1 FLOAT(15) not null default 0.0,
        pl_ratdorerr1 FLOAT(15) not null default 0.0,
        st_glon FLOAT(15) not null default 0.0,
        st_glat FLOAT(15) not null default 0.0,
        st_actlx FLOAT(15) not null default 0.0
        );
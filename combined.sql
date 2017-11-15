create database exoplanet_db;
        use exoplanet_db;
        create table exosale(
        rowid int(11) AUTO_INCREMENT not null primary key,
        st_dist float(15),
        pl_name varchar(255),
        pl_masseerr1 float(15),
        st_actlx float(15),
        sold tinyint(1)
        );
		create table product_info(
        rowid int(11) AUTO_INCREMENT not null primary key,
        pl_hostname varchar(255),
        pl_pnum int(11),
        pl_orbper FLOAT(15),
        pl_denserr1 FLOAT(15),
        st_dist FLOAT(15),
        st_teff FLOAT(15),
        st_mass FLOAT(15),
        rowupdate varchar(255),
        pl_name varchar(255),
        pl_eqt int(11),
        pl_masseerr1 FLOAT(15),
        pl_ratdorerr1 FLOAT(15),
        st_glon FLOAT(15),
        st_glat FLOAT(15),
        st_actlx FLOAT(15)
        );
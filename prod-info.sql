create database exoplanet_db;
	use exoplanet_db;
	create table product_info(
		rowid int(11) not null primary key,
        pl_hostname varchar(255) not null,
        pl_pnum int(11) not null,
        pl_orbper decimal(11,11),
        pl_denserr1 decimal(11,11),
        st_dist decimal(11,11),
        st_teff decimal(11,11),
        st_mass decimal(11,11),
        rowupdate varchar(255),
        pl_name varchar(255),
        pl_eqt int(11),
        pl_masseerr1 decimal(11,11),
		pl_ratdorerr1 decimal(11,11),
        st_glon decimal(11,11),
        st_glat decimal(11,11),
        st_actlx decimal(11,11)
		);

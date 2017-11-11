create database exoplanet_db;
	use exoplanet_db;
	create table exosale(
		rowid int(11) not null primary key,
        st_dist decimal(11,11),
        pl_name varchar(255),
        pl_masseerr1 decimal(11,11),
        st_actlx decimal(11,11)
		);
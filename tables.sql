drop database if exists `chemical`;
create database `chemical`;
use `chemical`;

create table `InChI` (
    `CAS-RN` int,
    `InChI-String` varchar(512),
    `InChI-Key` char(27),
    primary key (`CAS-RN`)
);

create table `SMILES` (
    `InChI-String` varchar(512),
    `SMILES` varchar(512) unique,
    primary key (`InChI-String`)
);

create table `IUPAC` (
    `InChI-String` varchar(512),
    `IUPAC` varchar(512) unique,
    primary key (`InChI-String`)
);

create table `ZH-Name` (
    `InChI-String` varchar(512),
    `ZH-Name` varchar(512) unique,
    primary key (`InChI-String`)
);

create table `Synonymous` (
    `CAS-RN` int,
    `Synonymous` varchar(512),
    primary key (`CAS-RN`, `Synonymous`)
);

create table `Molecular` (
    `CAS-RN` int,
    `Rel-Mass` int,
    primary key (`CAS-RN`)
);

create table `Nonorganic` (
    `CAS-RN` int,
    `Type` varchar(32),
    `Color` varchar(8),
    `Structure` varchar(16),
    primary key (`CAS-RN`, `Type`, `Color`, `Structure`)
);

create table `Organic` (
    `CAS-RN` int,
    `Type` varchar(32),
    `Isomer` int,
    primary key (`CAS-RN`, `Type`, `Isomer`)
);

create table `Group` (
    `CAS-RN` int,
    `Rel-Mass` float,
    primary key (`CAS-RN`)
);

create table `Ion` (
    `CAS-RN` int,
    `Rel-Mass` float,
    `Valence` int,
    primary key (`CAS-RN`)
);

create table `Contain` (
    `CAS-RN-Mol` int,
    `CAS-RN-Grp` int,
    `Number` int,
    primary key (`CAS-RN-Mol`, `CAS-RN-Grp`)
);

create table `Mol-P-Dependent` (
    `CAS-RN` int,
    `Pressure` float,
    `Melting-Point` float,
    `Boiling-Point` float,
    `Flash-Point` float,
    primary key (`CAS-RN`, `Pressure`)
);

create table `Mol-T-Dependent` (
    `CAS-RN` int,
    `Temperature` float,
    `Surface-Tension` float,
    primary key (`CAS-RN`, `Temperature`)
);

create table `Mol-PT-Dependent` (
    `CAS-RN` int,
    `Pressure` float,
    `Temperature` float,
    `Density` float,
    `Resolution` float,
    `Log-P` float,
    `Mol-Capacity` float,
    `Viscosity` float,
    `Heat-of-Combustion` float,
    `Heat-of-Vaporization` float,
    `Heat-of-Fusion` float,
    `Formation-Enthalpy` float,
    primary key (`CAS-RN`, `Pressure`, `Temperature`)
);

create table `Reaction` (
    `ID` int,
    `Enthalpy` float,
    `Entropy` float,
    `Reversable` char,
    primary key (`ID`)
);

create table `Reaction-Independent` (
    `ID` int,
    `Type` varchar(32),
    `Condition` varchar(32),
    primary key (`ID`)
);

create table `Reactant` (
    `Reaction-ID` int,
    `CAS-RN` int,
    `Number` int,
    primary key (`Reaction-ID`, `CAS-RN`)
);

create table `Production` (
    `REaction-ID` int,
    `CAS-RN` int,
    `Number` int,
    `Form` varchar(32),
    primary key (`Reaction-ID`, `CAS-RN`)
);

create table `Wiki` (
    `CAS-RN` int,
    `URL` varchar(255),
    primary key (`CAS-RN`)
);

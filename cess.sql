-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: cess
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `altas`
--

DROP TABLE IF EXISTS `altas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `altas` (
  `Id_Altas` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `Doctor` int NOT NULL,
  `Fecha_Alta` date NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Altas`),
  KEY `Id_Paciente` (`Id_Paciente`),
  KEY `Doctor` (`Doctor`),
  CONSTRAINT `altas_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`),
  CONSTRAINT `altas_ibfk_2` FOREIGN KEY (`Doctor`) REFERENCES `doctores` (`Id_Doctor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `altas`
--

LOCK TABLES `altas` WRITE;
/*!40000 ALTER TABLE `altas` DISABLE KEYS */;
/*!40000 ALTER TABLE `altas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `atm_exfisico`
--

DROP TABLE IF EXISTS `atm_exfisico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atm_exfisico` (
  `Id_ATM_Ex` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `Mov_Mand_Dim_Aper` float DEFAULT NULL,
  `Mov_Mand_Dim_Vert1` float DEFAULT NULL,
  `Mov_Mand_Dim_Vert2` float DEFAULT NULL,
  `Mov_Mand_Desv_Mand_Apertura` float DEFAULT NULL,
  `Mov_Mand_Desv_Mand_Cierre` float DEFAULT NULL,
  `R_Art_Chasquido` tinyint(1) DEFAULT NULL,
  `R_Art_Apertura` tinyint(1) DEFAULT NULL,
  `R_Art_Cierre` tinyint(1) DEFAULT NULL,
  `R_Art_Der` tinyint(1) DEFAULT NULL,
  `R_Art_Izq` tinyint(1) DEFAULT NULL,
  `R_Art_Bilateral` tinyint(1) DEFAULT NULL,
  `R_Art_Inicial` tinyint(1) DEFAULT NULL,
  `R_Art_Medio` tinyint(1) DEFAULT NULL,
  `R_Art_Tardio` tinyint(1) DEFAULT NULL,
  `R_Art_Reciproco` tinyint(1) DEFAULT NULL,
  `Crepitacion` tinyint(1) DEFAULT NULL,
  `Crep_Der` tinyint(1) DEFAULT NULL,
  `Crep_Izq` tinyint(1) DEFAULT NULL,
  `Crep_Bi` tinyint(1) DEFAULT NULL,
  `Luxacion` tinyint(1) DEFAULT NULL,
  `Lux_Der` tinyint(1) DEFAULT NULL,
  `Lux_Izq` tinyint(1) DEFAULT NULL,
  `Lux_Bi` tinyint(1) DEFAULT NULL,
  `Dolor` tinyint(1) DEFAULT NULL,
  `Dolor_Der` tinyint(1) DEFAULT NULL,
  `Dolor_Izq` tinyint(1) DEFAULT NULL,
  `Dolor_Bi` tinyint(1) DEFAULT NULL,
  `SDP` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_ATM_Ex`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `atm_exfisico_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atm_exfisico`
--

LOCK TABLES `atm_exfisico` WRITE;
/*!40000 ALTER TABLE `atm_exfisico` DISABLE KEYS */;
INSERT INTO `atm_exfisico` VALUES (1,'12i',49.5,62,71,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,'2020-07-11 04:17:31','2020-07-11 04:17:31'),(2,'12i',49.5,62,71,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,'2020-07-11 04:19:59','2020-07-11 04:19:59'),(3,'12i',95,0,0,45,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,'2020-08-03 22:27:36','2020-08-03 22:27:36'),(4,'VeHuBu2000',50,46,64,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,'2020-08-27 01:35:06','2020-08-27 01:35:06');
/*!40000 ALTER TABLE `atm_exfisico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `control_pagos`
--

DROP TABLE IF EXISTS `control_pagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `control_pagos` (
  `Id_CPago` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `Fecha_Trat` date DEFAULT NULL,
  `Descrip` varchar(45) DEFAULT NULL,
  `CostoT` int DEFAULT NULL,
  `Abono_T` float DEFAULT NULL,
  `SaldoT` int DEFAULT NULL,
  `FolioT` varchar(30) DEFAULT NULL,
  `Doctor_T` varchar(30) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_CPago`),
  KEY `Id_Paciente` (`Id_Paciente`),
  KEY `control_pagos_ibfk_2` (`Doctor_T`),
  CONSTRAINT `control_pagos_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `control_pagos`
--

LOCK TABLES `control_pagos` WRITE;
/*!40000 ALTER TABLE `control_pagos` DISABLE KEYS */;
INSERT INTO `control_pagos` VALUES (4,'SybuMo','2020-08-20',NULL,1000,500,500,'11','David','2020-08-22 16:04:49','2020-08-22 16:04:49'),(5,'MiBuHu','2020-08-14',NULL,4800,1800,3000,'11','DavidBustamante','2020-08-22 16:08:26','2020-08-22 16:08:26'),(6,'VeHuBu2000','2020-08-24',NULL,1500,1000,500,'1','AdministradorCESS','2020-08-26 03:18:46','2020-08-26 03:18:46'),(7,'BeHuGa','2020-08-24',NULL,2500,1500,1000,'1','AdministradorCESS','2020-08-29 02:46:17','2020-08-29 02:46:17'),(8,'BeHuGa','2020-08-25',NULL,1800,300,1500,'2','AdministradorCESS','2020-08-29 02:46:41','2020-08-29 02:46:41'),(9,'BeHuGa','2020-08-26','limpieza',850,850,0,'3','AdministradorCESS','2020-08-29 02:47:02','2020-08-29 02:47:02'),(10,'BeHuGa','2020-08-27','extraccion',4500,1500,3000,'5','AdministradorCESS','2020-08-29 03:11:42','2020-08-29 03:11:42'),(11,'','2020-08-19',NULL,2500,0,200,'0','AdministradorCESS','2020-08-29 03:46:10','2020-08-29 03:46:10'),(12,'','2020-08-28',NULL,2500,0,200,'0','AdministradorCESS','2020-08-29 03:46:42','2020-08-29 03:46:42'),(13,'','2020-08-20',NULL,100,200,200,'1','AdministradorCESS','2020-08-29 03:58:07','2020-08-29 03:58:07'),(14,'13i','2020-08-17',NULL,1500,1000,100,'1','AdministradorCESS','2020-08-29 04:18:23','2020-08-29 04:18:23'),(15,'BeHuGa','2020-08-26','amalgamas',350000,1500,1000,'1','AdministradorCESS','2020-08-29 04:57:23','2020-08-29 04:57:23'),(16,'VeHuBu2000','2020-08-27',NULL,10500,1000,500,'1','AdministradorCESS','2020-08-29 05:05:38','2020-08-29 05:05:38'),(17,'BeHuGa','2020-08-29','resinas',5400,4400,1000,'10','AdministradorCESS','2020-08-29 07:04:46','2020-08-29 07:04:46'),(18,'AdRaAl2000','2020-08-12','resinas',1500,1000,500,'11bd','AdministradorCESS','2020-09-01 18:11:01','2020-09-01 18:11:01');
/*!40000 ALTER TABLE `control_pagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `controlplacadb`
--

DROP TABLE IF EXISTS `controlplacadb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `controlplacadb` (
  `Id_ControlPDB` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `Sesion` varchar(20) DEFAULT NULL,
  `Porc_P` float DEFAULT NULL,
  `FechaCPDB` date DEFAULT NULL,
  `Observaciones` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_ControlPDB`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `controlplacadb_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `controlplacadb`
--

LOCK TABLES `controlplacadb` WRITE;
/*!40000 ALTER TABLE `controlplacadb` DISABLE KEYS */;
INSERT INTO `controlplacadb` VALUES (1,'AdRaAl2000','1',36.5,'2020-09-03',NULL,'2020-09-05 02:35:41','2020-09-05 02:35:41'),(2,'AdRaAl2000','2',30.35,'2020-09-01',NULL,'2020-09-05 02:37:54','2020-09-05 02:37:54');
/*!40000 ALTER TABLE `controlplacadb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datos_personales`
--

DROP TABLE IF EXISTS `datos_personales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datos_personales` (
  `Id_Paciente` varchar(13) NOT NULL,
  `Fecha_alta` varchar(19) DEFAULT NULL,
  `DOB` varchar(19) DEFAULT NULL,
  `RFC` varchar(13) DEFAULT NULL,
  `NombreP` varchar(35) DEFAULT NULL,
  `PaternoP` varchar(35) DEFAULT NULL,
  `MaternoP` varchar(35) DEFAULT NULL,
  `Edad` int DEFAULT '0',
  `Genero` varchar(10) DEFAULT NULL,
  `Calle` varchar(50) DEFAULT NULL,
  `Colonia` varchar(50) DEFAULT '0',
  `Ciudad` varchar(50) DEFAULT '0',
  `Tel_casa` varchar(10) DEFAULT NULL,
  `Tel_Celu` varchar(10) DEFAULT NULL,
  `Doctor_Alta` varchar(30) DEFAULT NULL,
  `Poblacion` varchar(50) DEFAULT NULL,
  `cp` int DEFAULT '0',
  `Facultad` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Paciente`),
  KEY `datos_personales_ibfk_2` (`Doctor_Alta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='aqui se genera el Id_Paciente ok';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datos_personales`
--

LOCK TABLES `datos_personales` WRITE;
/*!40000 ALTER TABLE `datos_personales` DISABLE KEYS */;
INSERT INTO `datos_personales` VALUES ('','','1996-01-09','','Maria','Rosales','',0,'0','','','','','','9','0',0,'','2020-07-30 04:03:05','2020-07-30 04:03:05'),('12i','','2001-12-12','lo','Raul','Medina','hy',1,'1','8uk','1','5','hg','jj','1',NULL,0,NULL,'9999-12-31 23:59:59','9999-12-31 23:59:59'),('13i','2020-07-29','1995-07-18','HUBD950718','David','Bustamante','Huerta',25,'0','rio acre','bosques de rio medio','veracruz','2291440378','2294225643','9','0',91809,'Administracion','2020-07-30 02:27:56','2020-07-30 02:27:56'),('AdRaAl2000','2020-08-29','2000-01-01','RAAA2000','Adai','Ramirez','Alcantara',20,'Mujer','Delfino valenzuela','Reforma','Veracruz','2881301215','2881301215','AdministradorCESS','Universidad Veracruzana',525,'Bioanalisis','2020-08-29 05:21:06','2020-08-29 05:21:06'),('ArOlCa1960','2020-08-26','1960-06-28','OLCA600628','Armando','Olivares','Campos',58,'Hombre','Cerrada de Mate #82','Infonavit Buenavista','Veracruz','','2291043638','AdministradorCESS','Público Abierto',92819,'','2020-08-26 07:10:40','2020-08-26 07:10:40'),('BeHuGa','2020-08-21','1967-04-04','HUGB670','Benito Arturo','Huerta','Garcia',53,'Hombre','RIO ACRE','LOMAS 4','VERACRUZ','2294341610','2292254171','9','1',91809,'','2020-08-21 20:01:26','2020-08-21 20:01:26'),('DaBuHu','2020-08-03','1995-07-18','HUBD950718Z0','David','Bustamante','Huerta',25,'0','rio acre','bosques de rio medio','veracruz','2291440378','2294341610','9','0',91809,'Administracion','2020-08-03 20:42:09','2020-08-03 20:42:09'),('DaHuBu','2020-07-29','1995-07-18','HUBD950718','David','Huerta','Bustamante',25,'0','rio acre','bosques de rio medio','veracruz','2294225643','2291440378','9','0',91809,'Administracion','2020-07-30 04:19:19','2020-07-30 04:19:19'),('MiBuHu','2020-08-14','2000-02-24','','Micha','Bustamante','Huerta',0,'0','','','veracruz','2291440378','2291440378','9','0',91809,'Administracion','2020-08-14 21:33:43','2020-08-14 21:33:43'),('RosArDa','2020-08-22','2013-06-03','ARDR130603','Rosa','Aramis','Dartangan',7,'Mujer','Altamirano','Zaragoza','Veracruz','','2294346110','DavidBustamante','Público Abierto',92810,'','2020-08-22 16:32:27','2020-08-22 16:32:27'),('SybuMo','2020-08-21','1970-11-05','HUBD950718','Sylvia','bustamante ','Mozo',49,'Mujer','no se','puente moreno','veracruz','2291440378','','9','Público Abierto',91809,'','2020-08-21 20:08:51','2020-08-21 20:08:51'),('VeHuBu2000','2020-08-25','2000-11-05','HUBV001105','Veronica','Huerta','Bustamante',18,'Mujer','RIO ACRE','bosques de rio medio','veracruz','2295149563','2298653266','AdministradorAdmin','Universidad Veracruzana',91809,'Comunicaciones','2020-08-26 00:31:59','2020-08-26 00:31:59');
/*!40000 ALTER TABLE `datos_personales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctores`
--

DROP TABLE IF EXISTS `doctores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctores` (
  `Id_Doctor` int NOT NULL AUTO_INCREMENT,
  `Id_MatriculaD` varchar(15) NOT NULL,
  `RFC_Dr` varchar(13) DEFAULT NULL,
  `NombreD` varchar(35) NOT NULL,
  `PaternoD` varchar(35) NOT NULL,
  `MaternoD` varchar(35) DEFAULT NULL,
  `Estudiante` varchar(10) DEFAULT NULL,
  `Num_identificacion` varchar(12) DEFAULT NULL,
  `Perfil` varchar(45) DEFAULT NULL,
  `psswdE` varchar(400) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `psswdD` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id_Doctor`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctores`
--

LOCK TABLES `doctores` WRITE;
/*!40000 ALTER TABLE `doctores` DISABLE KEYS */;
INSERT INTO `doctores` VALUES (1,'admin','CESS','Centro','salud','servicios','0','admin',NULL,'adminCESS',NULL,NULL,NULL),(9,'S18008355','HUBD950718','David','Bustamante','Huerta','1',NULL,'Administrador','d06b4d89ddffb4f8e71bb22c2206651fd9f0afe2dd3a7f6d3cc262c0e8c7ccd6','2020-06-23 01:52:24','2020-06-23 01:52:24',NULL),(12,'S19001563','HUBV001105','Veronica','Huerta','Bustamante','1',NULL,'Doctor','e3c23d95fd69a19279578dabd12e8f97d65e9c26a695dbbcd75456bcb56e60de','2020-07-10 21:57:24','2020-07-10 21:57:24',NULL),(13,'S18008355','HUBD950718','David','Bustamante','Huerta','1',NULL,NULL,'e3c23d95fd69a19279578dabd12e8f97d65e9c26a695dbbcd75456bcb56e60de','2020-07-14 02:02:10','2020-07-14 02:02:10',NULL),(14,'CESS2020','ADMIN2020','Administrador','CESS','CESS','0',NULL,NULL,'518518e16a30e120c109f860835da587b8379ddd60214c2e3b198a5b41607e90','2020-07-21 01:58:46','2020-07-21 01:58:46',NULL);
/*!40000 ALTER TABLE `doctores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evolucion`
--

DROP TABLE IF EXISTS `evolucion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evolucion` (
  `Id_Evolucion` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `Fecha_Atencion` date DEFAULT NULL,
  `Diente_Tratado` varchar(2) DEFAULT NULL,
  `Trat_Aplicado` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Evolucion`),
  KEY `Id_Paciente` (`Id_Paciente`),
  KEY `evolucion_ibfk_2` (`Trat_Aplicado`),
  CONSTRAINT `evolucion_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`),
  CONSTRAINT `evolucion_ibfk_2` FOREIGN KEY (`Trat_Aplicado`) REFERENCES `tratamiento` (`Id_Tratamiento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evolucion`
--

LOCK TABLES `evolucion` WRITE;
/*!40000 ALTER TABLE `evolucion` DISABLE KEYS */;
/*!40000 ALTER TABLE `evolucion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exploracion`
--

DROP TABLE IF EXISTS `exploracion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exploracion` (
  `Id_Exploracion` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `Cara` varchar(100) DEFAULT NULL,
  `Labios` varchar(100) DEFAULT NULL,
  `Piso_boca` varchar(100) DEFAULT NULL,
  `Cuello` varchar(100) DEFAULT NULL,
  `Lengua` varchar(100) DEFAULT NULL,
  `PBlando` varchar(100) DEFAULT NULL,
  `PDuro` varchar(100) DEFAULT NULL,
  `GSalivales` varchar(100) DEFAULT NULL,
  `Carrillos` varchar(100) DEFAULT NULL,
  `Amigdalas` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Exploracion`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `exploracion_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exploracion`
--

LOCK TABLES `exploracion` WRITE;
/*!40000 ALTER TABLE `exploracion` DISABLE KEYS */;
INSERT INTO `exploracion` VALUES (2,'12i','uno','tres','cinco','siete','nueve','dos','cuatreo','seis','ocho','la colita se te mueve xd','2020-08-22 04:32:49','2020-08-22 04:32:49'),(3,'12i','cara','lavios','','SPD','','','','','','SPD ´rueba vol.2','2020-08-22 06:33:06','2020-08-22 06:33:06'),(4,'12i','','','boca','SPD','','','','','carrillos','prueba 23','2020-08-22 06:35:54','2020-08-22 06:35:54'),(5,'','','','ño','ño','','','','','ño','prueba 30000','2020-08-22 06:38:21','2020-08-22 06:38:21'),(6,'','','','','','','','','','','','2020-08-22 06:40:49','2020-08-22 06:40:49'),(7,'13i','cara','','','','','d','','','','','2020-08-22 06:47:19','2020-08-22 06:47:19'),(8,'SybuMo','','','','','','','','','carrillos','sylvia','2020-08-22 06:50:52','2020-08-22 06:50:52'),(9,'VeHuBu2000','cara','Labios','Boca','SPD','SPD','Blando','Duro','SPD','SPD','Amigdalas','2020-08-26 02:19:15','2020-08-26 02:19:15');
/*!40000 ALTER TABLE `exploracion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `healthhistory`
--

DROP TABLE IF EXISTS `healthhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `healthhistory` (
  `Id_HH` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `P1` varchar(20) DEFAULT NULL,
  `P2` varchar(20) DEFAULT NULL,
  `P3` varchar(20) DEFAULT NULL,
  `P3_1` varchar(50) DEFAULT NULL,
  `P4` varchar(20) DEFAULT NULL,
  `P4_1` varchar(50) DEFAULT NULL,
  `P4_2` date DEFAULT NULL,
  `P4_3` date DEFAULT NULL,
  `P5` varchar(20) DEFAULT NULL,
  `P6` varchar(20) DEFAULT NULL,
  `P7` varchar(20) DEFAULT NULL,
  `P8` varchar(20) DEFAULT NULL,
  `P9` varchar(20) DEFAULT NULL,
  `P10` varchar(20) DEFAULT NULL,
  `P11` varchar(20) DEFAULT NULL,
  `P12` varchar(20) DEFAULT NULL,
  `P13` varchar(20) DEFAULT NULL,
  `P14` varchar(20) DEFAULT NULL,
  `P15` varchar(20) DEFAULT NULL,
  `P16` varchar(20) DEFAULT NULL,
  `P17` varchar(20) DEFAULT NULL,
  `P18` varchar(20) DEFAULT NULL,
  `P19` varchar(20) DEFAULT NULL,
  `P20` varchar(20) DEFAULT NULL,
  `P21` varchar(20) DEFAULT NULL,
  `P22` varchar(20) DEFAULT NULL,
  `P23` varchar(20) DEFAULT NULL,
  `P24` varchar(20) DEFAULT NULL,
  `P25` varchar(20) DEFAULT NULL,
  `P26` varchar(20) DEFAULT NULL,
  `P27` varchar(20) DEFAULT NULL,
  `P28` varchar(20) DEFAULT NULL,
  `P29` varchar(20) DEFAULT NULL,
  `P30` varchar(20) DEFAULT NULL,
  `P31` varchar(20) DEFAULT NULL,
  `P32` varchar(20) DEFAULT NULL,
  `P33` varchar(20) DEFAULT NULL,
  `P34` varchar(20) DEFAULT NULL,
  `P35` varchar(20) DEFAULT NULL,
  `P36` varchar(20) DEFAULT NULL,
  `P37` varchar(20) DEFAULT NULL,
  `P38` varchar(20) DEFAULT NULL,
  `P39` varchar(20) DEFAULT NULL,
  `P40` varchar(20) DEFAULT NULL,
  `P41` varchar(20) DEFAULT NULL,
  `P42` varchar(20) DEFAULT NULL,
  `P43` varchar(20) DEFAULT NULL,
  `P44` varchar(20) DEFAULT NULL,
  `P45` varchar(20) DEFAULT NULL,
  `P46` varchar(20) DEFAULT NULL,
  `P47` varchar(20) DEFAULT NULL,
  `P48` varchar(20) DEFAULT NULL,
  `P49` varchar(20) DEFAULT NULL,
  `P50` varchar(20) DEFAULT NULL,
  `P51` varchar(20) DEFAULT NULL,
  `P52` varchar(20) DEFAULT NULL,
  `P53` varchar(20) DEFAULT NULL,
  `P54` varchar(20) DEFAULT NULL,
  `P55` varchar(20) DEFAULT NULL,
  `P56` varchar(20) DEFAULT NULL,
  `P57` varchar(20) DEFAULT NULL,
  `P58` varchar(20) DEFAULT NULL,
  `P59` varchar(20) DEFAULT NULL,
  `P60` varchar(20) DEFAULT NULL,
  `P61` varchar(20) DEFAULT NULL,
  `P62` varchar(20) DEFAULT NULL,
  `P62_1` varchar(50) DEFAULT NULL,
  `P63` varchar(20) DEFAULT NULL,
  `P64` varchar(20) DEFAULT NULL,
  `P65` varchar(20) DEFAULT NULL,
  `P66` varchar(20) DEFAULT NULL,
  `P67` varchar(20) DEFAULT NULL,
  `P67_1` varchar(50) DEFAULT NULL,
  `fecha_hh` date DEFAULT NULL,
  `FirmaP` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_HH`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `healthhistory_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `healthhistory`
--

LOCK TABLES `healthhistory` WRITE;
/*!40000 ALTER TABLE `healthhistory` DISABLE KEYS */;
INSERT INTO `healthhistory` VALUES (1,'12i','No','No','No','ninguno','No','','2020-07-16','2013-09-10','Si',NULL,'Si','','No','No','No','','','No','No','','','','','','','','','No','','','','','No','No','','','No','','','Si','','','','No','','No','','','','','','','','Si','Si','No','','','','','','','Si','','No','','','Si','No','Si','No','No','','2020-08-21','David Huerta Bustamante','2020-08-22 04:07:49','2020-08-22 04:07:49'),(2,'12i','No','No','No','ninguno','No','','2020-07-16','2013-09-10','Si',NULL,'Si','','No','No','No','','','No','No','','','','','','','','','No','','','','','Si','No','','','No','','','No','','','','Si','','No','','','','','','','','Si','Si','No','','','','','','','Si','','No','','','Si','Si','Si','No','No','','2020-07-21','David Huerta Bustamante','2020-07-22 04:12:49','2020-08-22 04:12:49'),(3,'12i','','','','no','','','2020-08-26','2020-08-13','No',NULL,'No','No','No','Si','No','Si','No','Si','Si','Elija una opción','Si','Si','Si','Si','Si','Si','Si','No','Si','Si','Si','Si','Si','Si','No','No','No','No','No','Si','No','No','No','Si','No','No','No','No','No','0','1','0','No','No','Si','Si','Si','No','No','No','No','No','No','No','Si','No','','Si','Si','Si','No','No','','2020-08-27','Nadien','2020-05-27 05:47:46','2020-08-27 05:47:46'),(4,'12i','Si','No','No','ninguno','No','ño','2020-08-28','2020-08-28','No',NULL,'No','No','No','No','No','No','No','No','No','No','No','No','No','No','No','No','No','No','No','No','No','No','Si','Si','Si','No','No','No','No','No','No','No','No','No','Si','No','No','No','No','1','0','0','Si','No','No','Si','Si','No','No','No','No','No','No','No','No','No','Ninguno','No','No','No','No','No','','2020-08-28','David Huerta Bustamante','2020-08-29 04:21:14','2020-08-29 04:21:14'),(5,'AdRaAl2000','No','No','Si','ninguno','No','Ninguno','2020-08-29','2020-08-29','No',NULL,'No','No','No','No','Si','No','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','Si','No','Si','No','Si','Si','Si','Si','Si','1','1','0','Si','No','No','No','Si','No','Si','No','Si','Si','Si','Si','No','No','Ninguno','Si','No','No','No','Si','','2020-08-29','Adai Ramirez alcantara','2020-08-29 05:23:36','2020-08-29 05:23:36');
/*!40000 ALTER TABLE `healthhistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ihos`
--

DROP TABLE IF EXISTS `ihos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ihos` (
  `Id_IHOS` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `ID16y17_Placa` int DEFAULT NULL,
  `ID11y21_Placa` int DEFAULT NULL,
  `ID26y27_Placa` int DEFAULT NULL,
  `ID36y37_Placa` int DEFAULT NULL,
  `ID31y41_Placa` int DEFAULT NULL,
  `ID46y47_Placa` int DEFAULT NULL,
  `ID16y17_Sarro` int DEFAULT NULL,
  `ID11y21_Sarro` int DEFAULT NULL,
  `ID26y27_Sarro` int DEFAULT NULL,
  `ID36y37_Sarro` int DEFAULT NULL,
  `ID31y41_Sarro` int DEFAULT NULL,
  `ID46y47_Sarro` int DEFAULT NULL,
  `InPlacaTotal` int DEFAULT NULL,
  `InSarroTotal` int DEFAULT NULL,
  `TotalInIHOS` float DEFAULT NULL,
  `Higiene` varchar(20) DEFAULT NULL,
  `ObservacionesIHOS` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_IHOS`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `ihos_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ihos`
--

LOCK TABLES `ihos` WRITE;
/*!40000 ALTER TABLE `ihos` DISABLE KEYS */;
INSERT INTO `ihos` VALUES (1,'12i',0,0,0,0,0,0,1,2,3,0,0,0,1,7,2,NULL,'Prueba de conexión numero #1','2020-07-10 22:04:57','2020-07-10 22:04:57'),(2,'12i',4,3,2,1,0,1,0,0,0,0,0,1,4,0,2,NULL,'probando equipo de sonido','2020-08-03 22:41:16','2020-08-03 22:41:16'),(3,'12i',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,'prueba 2','2020-08-03 22:48:06','2020-08-03 22:48:06'),(4,'12i',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,'prueba num 3','2020-08-03 22:52:30','2020-08-03 22:52:30'),(5,'SybuMo',1,0,2,0,0,0,0,0,0,0,0,0,1,0,3.2,NULL,'prueba de asignación de pacientes','2020-08-22 08:05:58','2020-08-22 08:05:58'),(6,'VeHuBu2000',1,2,1,3,4,0,1,2,3,1,2,3,15,12,3.5,NULL,'prueba numero 1','2020-08-26 03:41:39','2020-08-26 03:41:39'),(7,'VeHuBu2000',1,2,1,3,4,0,1,2,3,1,2,3,15,12,3.5,NULL,'prueba numero 1 awiwis','2020-08-26 03:42:01','2020-08-26 03:42:01'),(8,'BeHuGa',2,1,3,2,1,1,1,1,5,3,1,1,0,0,1.14,NULL,'prueba2','2020-08-26 06:13:42','2020-08-26 06:13:42'),(9,'BeHuGa',2,1,3,2,1,1,1,1,5,3,1,1,0,0,1.14,NULL,'prueba2','2020-08-26 06:13:46','2020-08-26 06:13:46'),(10,'MiBuHu',1,1,2,1,4,1,2,1,0,1,1,2,13,7,1.15,NULL,'prueba 1','2020-08-26 07:01:54','2020-08-26 07:01:54'),(11,'ArOlCa1960',2,2,2,2,2,2,1,1,1,2,2,2,12,9,3.5,NULL,'Indice IHOS total 21 de Armando Olivares','2020-08-26 07:21:50','2020-08-26 07:21:50'),(12,'AdRaAl2000',0,0,9,1,1,1,0,0,9,1,1,1,12,12,4,NULL,'rip','2020-08-29 06:09:51','2020-08-29 06:09:51');
/*!40000 ALTER TABLE `ihos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ihost`
--

DROP TABLE IF EXISTS `ihost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ihost` (
  `Id_IHOST` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `TD16y17_Placa` int DEFAULT NULL,
  `TD11y21_Placa` int DEFAULT NULL,
  `TD26y27_Placa` int DEFAULT NULL,
  `TD36y37_Placa` int DEFAULT NULL,
  `TD31y41_Placa` int DEFAULT NULL,
  `TD46y47_Placa` int DEFAULT NULL,
  `TD16y17_Sarro` int DEFAULT NULL,
  `TD11y21_Sarro` int DEFAULT NULL,
  `TD26y27_Sarro` int DEFAULT NULL,
  `TD36y37_Sarro` int DEFAULT NULL,
  `TD31y41_Sarro` int DEFAULT NULL,
  `TD46y47_Sarro` int DEFAULT NULL,
  `TerPlacaTotal` int DEFAULT NULL,
  `TerSarroTotal` int DEFAULT NULL,
  `TotalTerIHOS` float DEFAULT NULL,
  `Higienet` varchar(20) DEFAULT NULL,
  `ObservacionesIHOS` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_IHOST`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `ihost_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ihost`
--

LOCK TABLES `ihost` WRITE;
/*!40000 ALTER TABLE `ihost` DISABLE KEYS */;
INSERT INTO `ihost` VALUES (1,'12i',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NULL,'prueba numero 4 ihos terminal','2020-08-03 22:58:25','2020-08-03 22:58:25'),(2,'ArOlCa1960',0,0,0,1,2,1,0,0,0,0,2,1,4,3,1,NULL,'Indice Terminal de Armando Olivares','2020-08-26 07:42:03','2020-08-26 07:42:03'),(3,'VeHuBu2000',1,1,2,1,1,1,0,0,0,1,1,1,7,3,1.66667,NULL,'Segunda visita','2020-08-27 00:49:51','2020-08-27 00:49:51'),(4,'AdRaAl2000',1,1,2,1,1,1,0,0,0,1,1,1,7,3,0,'Regular: 1.3-3.0','Tiene una higiene regular','2020-08-29 07:03:19','2020-08-29 07:03:19'),(5,'BeHuGa',1,1,1,2,2,2,0,0,0,1,1,1,9,3,0,'Mala: 3.1-6.0','Prueba 3','2020-09-01 00:38:14','2020-09-01 00:38:14'),(6,'13i',1,1,1,2,2,1,0,0,0,1,1,1,8,3,0,'Regular: 1.3-3.0','prueba numero 3 de la ventana modal','2020-09-01 01:18:35','2020-09-01 01:18:35');
/*!40000 ALTER TABLE `ihost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interrogacion`
--

DROP TABLE IF EXISTS `interrogacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interrogacion` (
  `Id_Interrogatorio` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `Enfermedades` varchar(150) DEFAULT NULL,
  `Diagnosticos` varchar(150) DEFAULT NULL,
  `Alergia_Penicilina` varchar(20) DEFAULT NULL,
  `Alergia_Otros` varchar(20) DEFAULT NULL,
  `Cuales` varchar(150) DEFAULT NULL,
  `Anestesia` varchar(20) DEFAULT NULL,
  `Problema_Anestesia` varchar(20) DEFAULT NULL,
  `Descripcion_4` varchar(150) DEFAULT NULL,
  `SangraMucho` varchar(20) DEFAULT NULL,
  `HemorragiaFrec` varchar(20) DEFAULT NULL,
  `UsaAnti` varchar(20) DEFAULT NULL,
  `UsaTranqui` varchar(20) DEFAULT NULL,
  `Descripcion_6_2` varchar(150) DEFAULT NULL,
  `Otros_Med` varchar(20) DEFAULT NULL,
  `Descripcion_6_4` varchar(150) DEFAULT NULL,
  `ParienteDiabetico` varchar(20) DEFAULT NULL,
  `Cuales_7_1` varchar(150) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Interrogatorio`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `interrogacion_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interrogacion`
--

LOCK TABLES `interrogacion` WRITE;
/*!40000 ALTER TABLE `interrogacion` DISABLE KEYS */;
INSERT INTO `interrogacion` VALUES (1,'12i','ninguna','no','Sí','No','Ninguno','No','Sí','Ninguno','No','No','No','No',NULL,'No','aioshfoia','No','dwdwdw','2020-08-22 04:32:49','2020-08-22 04:32:49'),(2,'','ninguna','','','','','','','','','','','',NULL,'No','','No','prueba1','2020-08-22 06:33:05','2020-08-22 06:33:05'),(3,'','ninguna','','','','','','','','','','','',NULL,'','','No','prueba 3','2020-08-22 06:35:54','2020-08-22 06:35:54'),(4,'','ninguna','','','','','','','','','Sí','','',NULL,'','','No','prueba 1000','2020-08-22 06:38:20','2020-08-22 06:38:20'),(5,'','','','','','','','','','','','','',NULL,'','','','','2020-08-22 06:40:49','2020-08-22 06:40:49'),(6,'13i','ninguna','no','Sí','Sí','Ninguno','No','No','Ninguno','Sí','No','No','No',NULL,'No','ss','No','prueba 111111','2020-08-22 06:47:19','2020-08-22 06:47:19'),(7,'SybuMo','ninguna','no','','','','','','','','','','',NULL,'','','','sylvia','2020-08-22 06:50:51','2020-08-22 06:50:51'),(8,'VeHuBu2000','ninguna','ninguna','No','No','Ninguno','No','No','nada','No','No','No','No',NULL,'No','ninguno','Sí','Abuela','2020-08-26 02:19:14','2020-08-26 02:19:14');
/*!40000 ALTER TABLE `interrogacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notasevolucion`
--

DROP TABLE IF EXISTS `notasevolucion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notasevolucion` (
  `Id_NotasEvolucion` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `FechaE` date DEFAULT NULL,
  `NoDiente` int DEFAULT NULL,
  `Tratamiento` varchar(200) DEFAULT NULL,
  `NombreDr` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_NotasEvolucion`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `notasevolucion_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notasevolucion`
--

LOCK TABLES `notasevolucion` WRITE;
/*!40000 ALTER TABLE `notasevolucion` DISABLE KEYS */;
INSERT INTO `notasevolucion` VALUES (1,'AdRaAl2000','2020-08-24',3,'Limpieza','AdministradorCESS','2020-08-29 07:59:37','2020-08-29 07:59:37'),(2,'AdRaAl2000','2020-08-25',18,'extraccion','AdministradorCESS','2020-08-29 07:59:52','2020-08-29 07:59:52'),(3,'AdRaAl2000','2020-08-25',17,'extraccion','AdministradorCESS','2020-08-29 07:59:59','2020-08-29 07:59:59'),(4,'AdRaAl2000','2020-08-27',38,'amalgama','AdministradorCESS','2020-08-29 08:00:13','2020-08-29 08:00:13'),(5,'AdRaAl2000','2020-08-18',28,'Limpieza','AdministradorCESS','2020-09-04 08:11:34','2020-09-04 08:11:34');
/*!40000 ALTER TABLE `notasevolucion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `odontograma`
--

DROP TABLE IF EXISTS `odontograma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `odontograma` (
  `Id_Odontograma` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) DEFAULT NULL,
  `DDS18` int DEFAULT '0',
  `DDS17` int DEFAULT '0',
  `DDS16` int DEFAULT '0',
  `DDS15` int DEFAULT '0',
  `DDS14` int DEFAULT '0',
  `DDS13` int DEFAULT '0',
  `DDS12` int DEFAULT '0',
  `DDS11` int DEFAULT '0',
  `DDS55` int DEFAULT '0',
  `DDS54` int DEFAULT '0',
  `DDS53` int DEFAULT '0',
  `DDS52` int DEFAULT '0',
  `DDS51` int DEFAULT '0',
  `DIS28` int DEFAULT '0',
  `DDI43` int DEFAULT '0',
  `DIS25` int DEFAULT '0',
  `DIS24` int DEFAULT '0',
  `DIS23` int DEFAULT '0',
  `DIS22` int DEFAULT '0',
  `DIS21` int DEFAULT '0',
  `DIS65` int DEFAULT '0',
  `DIS64` int DEFAULT '0',
  `DIS63` int DEFAULT '0',
  `DIS62` int DEFAULT '0',
  `DIS61` int DEFAULT '0',
  `DDI48` int DEFAULT '0',
  `DDI47` int DEFAULT '0',
  `DDI46` int DEFAULT '0',
  `DDI45` int DEFAULT '0',
  `DDI44` int DEFAULT '0',
  `DDI42` int DEFAULT '0',
  `DDI41` int DEFAULT '0',
  `DDI85` int DEFAULT '0',
  `DDI84` int DEFAULT '0',
  `DDI83` int DEFAULT '0',
  `DDI82` int DEFAULT '0',
  `DDI81` int DEFAULT '0',
  `DII38` int DEFAULT '0',
  `DII37` int DEFAULT '0',
  `DII36` int DEFAULT '0',
  `DII32` int DEFAULT '0',
  `DIS27` int DEFAULT '0',
  `DIS26` int DEFAULT '0',
  `DII35` int DEFAULT '0',
  `DII34` int DEFAULT '0',
  `DII33` int DEFAULT '0',
  `DII31` int DEFAULT '0',
  `DII75` int DEFAULT '0',
  `DII74` int DEFAULT '0',
  `DII73` int DEFAULT '0',
  `DII72` int DEFAULT '0',
  `DII71` int DEFAULT '0',
  `C` int DEFAULT '0',
  `P` int DEFAULT '0',
  `O` int DEFAULT '0',
  `CPO` int DEFAULT '0',
  `ObserOdonto` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Odontograma`),
  KEY `odontograma_ibfk_2` (`Id_Paciente`),
  CONSTRAINT `odontograma_ibfk_2` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `odontograma`
--

LOCK TABLES `odontograma` WRITE;
/*!40000 ALTER TABLE `odontograma` DISABLE KEYS */;
INSERT INTO `odontograma` VALUES (6,'BeHuGa',1,0,1,1,1,1,0,1,0,0,0,0,0,3,1,1,1,0,3,2,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,5,6,0,'Hola Mundo, prueba de asignación de pacientes y consulta de información','2020-08-26 06:41:12','2020-08-26 06:41:12'),(8,'AdRaAl2000',1,1,3,4,1,1,3,4,0,0,0,0,0,3,1,4,4,3,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,8,0,0,0,4,3,5,2,0,1,0,0,0,0,0,0,3,0,0,'pru','2020-09-05 02:27:59','2020-09-05 02:27:59'),(9,'ArOlCa1960',0,1,2,3,1,1,1,1,1,4,2,5,4,5,0,6,5,4,2,3,4,5,6,3,6,10,1,0,0,0,0,0,1,2,0,1,2,0,0,0,0,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,'prueba 1','2020-09-05 03:19:20','2020-09-05 03:19:20'),(10,'RosArDa',1,0,1,1,1,0,2,3,7,5,2,10,2,6,5,3,2,4,4,2,0,0,2,0,1,0,1,1,2,3,2,4,1,3,1,1,0,5,3,5,8,5,4,1,1,5,5,0,0,0,0,0,0,0,4,0,'prubea 2','2020-09-05 03:30:19','2020-09-05 03:30:19'),(11,'ArOlCa1960',0,1,2,3,1,1,1,1,1,4,2,5,4,5,0,6,5,4,2,3,4,5,6,3,6,10,1,0,0,0,0,0,1,2,0,2,2,0,0,0,0,4,5,0,0,0,0,0,0,0,0,0,0,0,5,0,'prueba 2','2020-09-05 03:38:16','2020-09-05 03:38:16'),(12,'VeHuBu2000',1,0,3,0,0,0,0,4,0,0,0,0,0,0,0,0,0,2,3,0,0,0,0,0,0,3,0,0,0,0,0,5,0,0,0,0,0,1,1,0,0,0,5,4,4,2,0,0,0,0,0,0,0,0,0,0,'prueba 3 CPO','2020-09-05 03:40:48','2020-09-05 03:40:48'),(13,'MiBuHu',1,2,0,1,1,1,1,1,0,0,0,0,0,2,2,4,4,2,3,0,0,0,0,0,0,0,2,3,1,1,4,6,0,0,0,2,2,4,2,6,74,3,4,5,5,8,5,1,1,2,3,1,20,5,4,29,'prueba 4 ya me cansé xd','2020-09-05 04:07:01','2020-09-05 04:07:01');
/*!40000 ALTER TABLE `odontograma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `placaact`
--

DROP TABLE IF EXISTS `placaact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `placaact` (
  `Id_X100ACT` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `ADDS18` int DEFAULT NULL,
  `ADDS17` int DEFAULT NULL,
  `ADDS16` int DEFAULT NULL,
  `ADDS15` int DEFAULT NULL,
  `ADDS14` int DEFAULT NULL,
  `ADDS13` int DEFAULT NULL,
  `ADDS12` int DEFAULT NULL,
  `ADDS11` int DEFAULT NULL,
  `ADIS28` int DEFAULT NULL,
  `ADIS27` int DEFAULT NULL,
  `ADIS26` int DEFAULT NULL,
  `ADIS25` int DEFAULT NULL,
  `ADIS24` int DEFAULT NULL,
  `ADIS23` int DEFAULT NULL,
  `ADIS22` int DEFAULT NULL,
  `ADIS21` int DEFAULT NULL,
  `ADDI48` int DEFAULT NULL,
  `ADDI47` int DEFAULT NULL,
  `ADDI46` int DEFAULT NULL,
  `ADDI45` int DEFAULT NULL,
  `ADDI44` int DEFAULT NULL,
  `ADDI43` int DEFAULT NULL,
  `ADDI42` int DEFAULT NULL,
  `ADDI41` int DEFAULT NULL,
  `ADII38` int DEFAULT NULL,
  `ADII37` int DEFAULT NULL,
  `ADII36` int DEFAULT NULL,
  `ADII35` int DEFAULT NULL,
  `ADII34` int DEFAULT NULL,
  `ADII33` int DEFAULT NULL,
  `ADII32` int DEFAULT NULL,
  `ADII31` int DEFAULT NULL,
  `AObser` varchar(100) DEFAULT NULL,
  `TotalPlacaActual` float DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_X100ACT`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `placaact_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placaact`
--

LOCK TABLES `placaact` WRITE;
/*!40000 ALTER TABLE `placaact` DISABLE KEYS */;
INSERT INTO `placaact` VALUES (1,'12i',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,'prueba 3',3.5,'2020-08-18 05:03:43','2020-08-18 05:03:43'),(2,'12i',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,'',3,'2020-08-18 05:04:04','2020-08-18 05:04:04'),(3,'ArOlCa1960',9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,'prueba de guardado 1',0,'2020-09-07 21:24:39','2020-09-07 21:24:39');
/*!40000 ALTER TABLE `placaact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `placaact3`
--

DROP TABLE IF EXISTS `placaact3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `placaact3` (
  `Id_X100ACT3` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `A3DDS18` int DEFAULT NULL,
  `A3DDS17` int DEFAULT NULL,
  `A3DDS16` int DEFAULT NULL,
  `A3DDS15` int DEFAULT NULL,
  `A3DDS14` int DEFAULT NULL,
  `A3DDS13` int DEFAULT NULL,
  `A3DDS12` int DEFAULT NULL,
  `A3DDS11` int DEFAULT NULL,
  `A3DIS28` int DEFAULT NULL,
  `A3DIS27` int DEFAULT NULL,
  `A3DIS26` int DEFAULT NULL,
  `A3DIS25` int DEFAULT NULL,
  `A3DIS24` int DEFAULT NULL,
  `A3DIS23` int DEFAULT NULL,
  `A3DIS22` int DEFAULT NULL,
  `A3DIS21` int DEFAULT NULL,
  `A3DDI48` int DEFAULT NULL,
  `A3DDI47` int DEFAULT NULL,
  `A3DDI46` int DEFAULT NULL,
  `A3DDI45` int DEFAULT NULL,
  `A3DDI44` int DEFAULT NULL,
  `A3DDI43` int DEFAULT NULL,
  `A3DDI42` int DEFAULT NULL,
  `A3DDI41` int DEFAULT NULL,
  `A3DII38` int DEFAULT NULL,
  `A3DII37` int DEFAULT NULL,
  `A3DII36` int DEFAULT NULL,
  `A3DII35` int DEFAULT NULL,
  `A3DII34` int DEFAULT NULL,
  `A3DII33` int DEFAULT NULL,
  `A3DII32` int DEFAULT NULL,
  `A3DII31` int DEFAULT NULL,
  `A3Obser` text,
  `TotalPlacaActual3` float DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_X100ACT3`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `placaact3_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placaact3`
--

LOCK TABLES `placaact3` WRITE;
/*!40000 ALTER TABLE `placaact3` DISABLE KEYS */;
INSERT INTO `placaact3` VALUES (1,'ArOlCa1960',9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,'prueba 1',0,'2020-09-07 21:25:14','2020-09-07 21:25:14');
/*!40000 ALTER TABLE `placaact3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `placaact4`
--

DROP TABLE IF EXISTS `placaact4`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `placaact4` (
  `Id_X100ACT4` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `A4DDS18` int DEFAULT NULL,
  `A4DDS17` int DEFAULT NULL,
  `A4DDS16` int DEFAULT NULL,
  `A4DDS15` int DEFAULT NULL,
  `A4DDS14` int DEFAULT NULL,
  `A4DDS13` int DEFAULT NULL,
  `A4DDS12` int DEFAULT NULL,
  `A4DDS11` int DEFAULT NULL,
  `A4DIS28` int DEFAULT NULL,
  `A4DIS27` int DEFAULT NULL,
  `A4DIS26` int DEFAULT NULL,
  `A4DIS25` int DEFAULT NULL,
  `A4DIS24` int DEFAULT NULL,
  `A4DIS23` int DEFAULT NULL,
  `A4DIS22` int DEFAULT NULL,
  `A4DIS21` int DEFAULT NULL,
  `A4DDI48` int DEFAULT NULL,
  `A4DDI47` int DEFAULT NULL,
  `A4DDI46` int DEFAULT NULL,
  `A4DDI45` int DEFAULT NULL,
  `A4DDI44` int DEFAULT NULL,
  `A4DDI43` int DEFAULT NULL,
  `A4DDI42` int DEFAULT NULL,
  `A4DDI41` int DEFAULT NULL,
  `A4DII38` int DEFAULT NULL,
  `A4DII37` int DEFAULT NULL,
  `A4DII36` int DEFAULT NULL,
  `A4DII35` int DEFAULT NULL,
  `A4DII34` int DEFAULT NULL,
  `A4DII33` int DEFAULT NULL,
  `A4DII32` int DEFAULT NULL,
  `A4DII31` int DEFAULT NULL,
  `A4Obser` text,
  `TotalPlacaActual4` float DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_X100ACT4`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `placaact4_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placaact4`
--

LOCK TABLES `placaact4` WRITE;
/*!40000 ALTER TABLE `placaact4` DISABLE KEYS */;
INSERT INTO `placaact4` VALUES (1,'ArOlCa1960',9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,'prueba 1',0,'2020-09-07 21:26:12','2020-09-07 21:26:12');
/*!40000 ALTER TABLE `placaact4` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `placaact5`
--

DROP TABLE IF EXISTS `placaact5`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `placaact5` (
  `Id_X100ACT5` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `A5DDS18` int DEFAULT NULL,
  `A5DDS17` int DEFAULT NULL,
  `A5DDS16` int DEFAULT NULL,
  `A5DDS15` int DEFAULT NULL,
  `A5DDS14` int DEFAULT NULL,
  `A5DDS13` int DEFAULT NULL,
  `A5DDS12` int DEFAULT NULL,
  `A5DDS11` int DEFAULT NULL,
  `A5DIS28` int DEFAULT NULL,
  `A5DIS27` int DEFAULT NULL,
  `A5DIS26` int DEFAULT NULL,
  `A5DIS25` int DEFAULT NULL,
  `A5DIS24` int DEFAULT NULL,
  `A5DIS23` int DEFAULT NULL,
  `A5DIS22` int DEFAULT NULL,
  `A5DIS21` int DEFAULT NULL,
  `A5DDI48` int DEFAULT NULL,
  `A5DDI47` int DEFAULT NULL,
  `A5DDI46` int DEFAULT NULL,
  `A5DDI45` int DEFAULT NULL,
  `A5DDI44` int DEFAULT NULL,
  `A5DDI43` int DEFAULT NULL,
  `A5DDI42` int DEFAULT NULL,
  `A5DDI41` int DEFAULT NULL,
  `A5DII38` int DEFAULT NULL,
  `A5DII37` int DEFAULT NULL,
  `A5DII36` int DEFAULT NULL,
  `A5DII35` int DEFAULT NULL,
  `A5DII34` int DEFAULT NULL,
  `A5DII33` int DEFAULT NULL,
  `A5DII32` int DEFAULT NULL,
  `A5DII31` int DEFAULT NULL,
  `A5Obser` text,
  `TotalPlacaActual5` float DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_X100ACT5`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `placaact5_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placaact5`
--

LOCK TABLES `placaact5` WRITE;
/*!40000 ALTER TABLE `placaact5` DISABLE KEYS */;
INSERT INTO `placaact5` VALUES (1,'ArOlCa1960',9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,'prueba 1',0,'2020-09-07 21:26:42','2020-09-07 21:26:42'),(2,'ArOlCa1960',9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,'prueba 1',0,'2020-09-07 21:27:29','2020-09-07 21:27:29');
/*!40000 ALTER TABLE `placaact5` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `placaact6`
--

DROP TABLE IF EXISTS `placaact6`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `placaact6` (
  `Id_X100ACT6` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `A6DDS18` int DEFAULT NULL,
  `A6DDS17` int DEFAULT NULL,
  `A6DDS16` int DEFAULT NULL,
  `A6DDS15` int DEFAULT NULL,
  `A6DDS14` int DEFAULT NULL,
  `A6DDS13` int DEFAULT NULL,
  `A6DDS12` int DEFAULT NULL,
  `A6DDS11` int DEFAULT NULL,
  `A6DIS28` int DEFAULT NULL,
  `A6DIS27` int DEFAULT NULL,
  `A6DIS26` int DEFAULT NULL,
  `A6DIS25` int DEFAULT NULL,
  `A6DIS24` int DEFAULT NULL,
  `A6DIS23` int DEFAULT NULL,
  `A6DIS22` int DEFAULT NULL,
  `A6DIS21` int DEFAULT NULL,
  `A6DDI48` int DEFAULT NULL,
  `A6DDI47` int DEFAULT NULL,
  `A6DDI46` int DEFAULT NULL,
  `A6DDI45` int DEFAULT NULL,
  `A6DDI44` int DEFAULT NULL,
  `A6DDI43` int DEFAULT NULL,
  `A6DDI42` int DEFAULT NULL,
  `A6DDI41` int DEFAULT NULL,
  `A6DII38` int DEFAULT NULL,
  `A6DII37` int DEFAULT NULL,
  `A6DII36` int DEFAULT NULL,
  `A6DII35` int DEFAULT NULL,
  `A6DII34` int DEFAULT NULL,
  `A6DII33` int DEFAULT NULL,
  `A6DII32` int DEFAULT NULL,
  `A6DII31` int DEFAULT NULL,
  `A6Obser` text,
  `TotalPlacaActual6` float DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_X100ACT6`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `placaact6_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placaact6`
--

LOCK TABLES `placaact6` WRITE;
/*!40000 ALTER TABLE `placaact6` DISABLE KEYS */;
INSERT INTO `placaact6` VALUES (1,'ArOlCa1960',9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,'prueba 3',0,'2020-09-07 21:34:26','2020-09-07 21:34:26');
/*!40000 ALTER TABLE `placaact6` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `placaact7`
--

DROP TABLE IF EXISTS `placaact7`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `placaact7` (
  `Id_X100ACT7` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `A7DDS18` int DEFAULT NULL,
  `A7DDS17` int DEFAULT NULL,
  `A7DDS16` int DEFAULT NULL,
  `A7DDS15` int DEFAULT NULL,
  `A7DDS14` int DEFAULT NULL,
  `A7DDS13` int DEFAULT NULL,
  `A7DDS12` int DEFAULT NULL,
  `A7DDS11` int DEFAULT NULL,
  `A7DIS28` int DEFAULT NULL,
  `A7DIS27` int DEFAULT NULL,
  `A7DIS26` int DEFAULT NULL,
  `A7DIS25` int DEFAULT NULL,
  `A7DIS24` int DEFAULT NULL,
  `A7DIS23` int DEFAULT NULL,
  `A7DIS22` int DEFAULT NULL,
  `A7DIS21` int DEFAULT NULL,
  `A7DDI48` int DEFAULT NULL,
  `A7DDI47` int DEFAULT NULL,
  `A7DDI46` int DEFAULT NULL,
  `A7DDI45` int DEFAULT NULL,
  `A7DDI44` int DEFAULT NULL,
  `A7DDI43` int DEFAULT NULL,
  `A7DDI42` int DEFAULT NULL,
  `A7DDI41` int DEFAULT NULL,
  `A7DII38` int DEFAULT NULL,
  `A7DII37` int DEFAULT NULL,
  `A7DII36` int DEFAULT NULL,
  `A7DII35` int DEFAULT NULL,
  `A7DII34` int DEFAULT NULL,
  `A7DII33` int DEFAULT NULL,
  `A7DII32` int DEFAULT NULL,
  `A7DII31` int DEFAULT NULL,
  `A7Obser` text,
  `TotalPlacaActual7` float DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_X100ACT7`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `placaact7_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placaact7`
--

LOCK TABLES `placaact7` WRITE;
/*!40000 ALTER TABLE `placaact7` DISABLE KEYS */;
INSERT INTO `placaact7` VALUES (1,'ArOlCa1960',9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,'prueba 1',0,'2020-09-07 21:35:06','2020-09-07 21:35:06');
/*!40000 ALTER TABLE `placaact7` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `placaant`
--

DROP TABLE IF EXISTS `placaant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `placaant` (
  `Id_X100ANT` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `IDDS18` int DEFAULT NULL,
  `IDDS17` int DEFAULT NULL,
  `IDDS16` int DEFAULT NULL,
  `IDDS15` int DEFAULT NULL,
  `IDDS14` int DEFAULT NULL,
  `IDDS13` int DEFAULT NULL,
  `IDDS12` int DEFAULT NULL,
  `IDDS11` int DEFAULT NULL,
  `IDIS28` int DEFAULT NULL,
  `IDIS27` int DEFAULT NULL,
  `IDIS26` int DEFAULT NULL,
  `IDIS25` int DEFAULT NULL,
  `IDIS24` int DEFAULT NULL,
  `IDIS23` int DEFAULT NULL,
  `IDIS22` int DEFAULT NULL,
  `IDIS21` int DEFAULT NULL,
  `IDDI48` int DEFAULT NULL,
  `IDDI47` int DEFAULT NULL,
  `IDDI46` int DEFAULT NULL,
  `IDDI45` int DEFAULT NULL,
  `IDDI44` int DEFAULT NULL,
  `IDDI43` int DEFAULT NULL,
  `IDDI42` int DEFAULT NULL,
  `IDDI41` int DEFAULT NULL,
  `IDII38` int DEFAULT NULL,
  `IDII37` int DEFAULT NULL,
  `IDII36` int DEFAULT NULL,
  `IDII35` int DEFAULT NULL,
  `IDII34` int DEFAULT NULL,
  `IDII33` int DEFAULT NULL,
  `IDII32` int DEFAULT NULL,
  `IDII31` int DEFAULT NULL,
  `TotalPlacaAnterior` float DEFAULT NULL,
  `IObser` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_X100ANT`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `placaant_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placaant`
--

LOCK TABLES `placaant` WRITE;
/*!40000 ALTER TABLE `placaant` DISABLE KEYS */;
INSERT INTO `placaant` VALUES (1,'12i',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,0,0,0,0,2.5,'prueba 6','2020-08-18 05:00:55','2020-08-18 05:00:55');
/*!40000 ALTER TABLE `placaant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ptratamiento`
--

DROP TABLE IF EXISTS `ptratamiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ptratamiento` (
  `Id_PTratamiento` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `TDDS18` varchar(50) DEFAULT NULL,
  `TDDS17` varchar(50) DEFAULT NULL,
  `TDDS16` varchar(50) DEFAULT NULL,
  `TDDS15` varchar(50) DEFAULT NULL,
  `TDDS14` varchar(50) DEFAULT NULL,
  `TDDS13` varchar(50) DEFAULT NULL,
  `TDDS12` varchar(50) DEFAULT NULL,
  `TDDS11` varchar(50) DEFAULT NULL,
  `TDIS28` varchar(50) DEFAULT NULL,
  `TDIS27` varchar(50) DEFAULT NULL,
  `TDIS26` varchar(50) DEFAULT NULL,
  `TDIS25` varchar(50) DEFAULT NULL,
  `TDIS24` varchar(50) DEFAULT NULL,
  `TDIS23` varchar(50) DEFAULT NULL,
  `TDIS22` varchar(50) DEFAULT NULL,
  `TDIS21` varchar(50) DEFAULT NULL,
  `TDDI48` varchar(50) DEFAULT NULL,
  `TDDI47` varchar(50) DEFAULT NULL,
  `TDDI46` varchar(50) DEFAULT NULL,
  `TDDI45` varchar(50) DEFAULT NULL,
  `TDDI44` varchar(50) DEFAULT NULL,
  `TDDI43` varchar(50) DEFAULT NULL,
  `TDDI42` varchar(50) DEFAULT NULL,
  `TDDI41` varchar(50) DEFAULT NULL,
  `TDII38` varchar(50) DEFAULT NULL,
  `TDII37` varchar(50) DEFAULT NULL,
  `TDII36` varchar(50) DEFAULT NULL,
  `TDII35` varchar(50) DEFAULT NULL,
  `TDII34` varchar(50) DEFAULT NULL,
  `TDII33` varchar(50) DEFAULT NULL,
  `TDII32` varchar(50) DEFAULT NULL,
  `TDII31` varchar(50) DEFAULT NULL,
  `TObser` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_PTratamiento`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `ptratamiento_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ptratamiento`
--

LOCK TABLES `ptratamiento` WRITE;
/*!40000 ALTER TABLE `ptratamiento` DISABLE KEYS */;
INSERT INTO `ptratamiento` VALUES (1,'12i','amalgama','','','','','','','','','','','','','','','','resina','','','','','','','','','','','','extraccion','','','','Prueba 2','2020-08-17 21:33:50','2020-08-17 21:33:50'),(2,'SybuMo','amalgama','','','','','','','','','','','','','','','','resina','','','','','','','','','','','','','','','','pruebanumero 1','2020-08-22 17:06:42','2020-08-22 17:06:42');
/*!40000 ALTER TABLE `ptratamiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tratamiento`
--

DROP TABLE IF EXISTS `tratamiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tratamiento` (
  `Id_Tratamiento` int NOT NULL AUTO_INCREMENT,
  `NombreT` varchar(50) NOT NULL,
  `Descripcion` varchar(100) DEFAULT NULL,
  `CostoxUnidad` float DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Tratamiento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tratamiento`
--

LOCK TABLES `tratamiento` WRITE;
/*!40000 ALTER TABLE `tratamiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `tratamiento` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-08 14:54:38

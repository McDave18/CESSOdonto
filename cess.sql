CREATE DATABASE  IF NOT EXISTS `cess` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cess`;
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
  `Id_ATM` varchar(13) NOT NULL,
  `Mov_Mand_Dim_Vert1` int DEFAULT NULL,
  `Mov_Mand_Dim_Vert2` int DEFAULT NULL,
  `Mov_Mand_Desv_Mand_Apertura` int DEFAULT NULL,
  `Mov_Mand_Desv_Mand_Cierre` int DEFAULT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atm_exfisico`
--

LOCK TABLES `atm_exfisico` WRITE;
/*!40000 ALTER TABLE `atm_exfisico` DISABLE KEYS */;
/*!40000 ALTER TABLE `atm_exfisico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `codigo_postal`
--

DROP TABLE IF EXISTS `codigo_postal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `codigo_postal` (
  `Id_CP` int NOT NULL AUTO_INCREMENT,
  `CodigoP` varchar(5) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_CP`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `codigo_postal`
--

LOCK TABLES `codigo_postal` WRITE;
/*!40000 ALTER TABLE `codigo_postal` DISABLE KEYS */;
INSERT INTO `codigo_postal` VALUES (1,'98987',NULL,NULL);
/*!40000 ALTER TABLE `codigo_postal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colonia`
--

DROP TABLE IF EXISTS `colonia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colonia` (
  `Id_Colonia` int NOT NULL AUTO_INCREMENT,
  `NombreCol` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Colonia`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colonia`
--

LOCK TABLES `colonia` WRITE;
/*!40000 ALTER TABLE `colonia` DISABLE KEYS */;
INSERT INTO `colonia` VALUES (1,'trt',NULL,NULL);
/*!40000 ALTER TABLE `colonia` ENABLE KEYS */;
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
  `Id_Pago` varchar(13) NOT NULL,
  `Fecha_Trat` datetime DEFAULT NULL,
  `Abono_T` float DEFAULT NULL,
  `Doctor_T` int DEFAULT NULL,
  `Firma` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_CPago`),
  KEY `Id_Paciente` (`Id_Paciente`),
  KEY `control_pagos_ibfk_2` (`Doctor_T`),
  CONSTRAINT `control_pagos_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`),
  CONSTRAINT `control_pagos_ibfk_2` FOREIGN KEY (`Doctor_T`) REFERENCES `doctores` (`Id_Doctor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `control_pagos`
--

LOCK TABLES `control_pagos` WRITE;
/*!40000 ALTER TABLE `control_pagos` DISABLE KEYS */;
/*!40000 ALTER TABLE `control_pagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `control_placadb`
--

DROP TABLE IF EXISTS `control_placadb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `control_placadb` (
  `Id_ControlPDB` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `Sesion` varchar(13) DEFAULT NULL,
  `Porc_P` int DEFAULT NULL,
  `Observaciones` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_ControlPDB`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `control_placadb_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `control_placadb`
--

LOCK TABLES `control_placadb` WRITE;
/*!40000 ALTER TABLE `control_placadb` DISABLE KEYS */;
/*!40000 ALTER TABLE `control_placadb` ENABLE KEYS */;
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
  `RFC` varchar(10) DEFAULT NULL,
  `NombreP` varchar(35) DEFAULT NULL,
  `PaternoP` varchar(35) DEFAULT NULL,
  `MaternoP` varchar(35) DEFAULT NULL,
  `Edad` int DEFAULT '0',
  `Genero` int DEFAULT NULL,
  `Calle` varchar(50) DEFAULT NULL,
  `Colonia` int DEFAULT '0',
  `Ciudad` int DEFAULT '0',
  `cp` int DEFAULT '0',
  `Tel_casa` varchar(10) DEFAULT NULL,
  `Tel_Celu` varchar(10) DEFAULT NULL,
  `Doctor_Alta` int DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Paciente`),
  KEY `datos_personales_ibfk_1` (`cp`),
  KEY `datos_personales_ibfk_2` (`Doctor_Alta`),
  CONSTRAINT `datos_personales_ibfk_1` FOREIGN KEY (`cp`) REFERENCES `codigo_postal` (`Id_CP`),
  CONSTRAINT `datos_personales_ibfk_2` FOREIGN KEY (`Doctor_Alta`) REFERENCES `doctores` (`Id_Doctor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datos_personales`
--

LOCK TABLES `datos_personales` WRITE;
/*!40000 ALTER TABLE `datos_personales` DISABLE KEYS */;
INSERT INTO `datos_personales` VALUES ('12i','','','lo','lj','mn','hy',1,1,'8uk',1,5,1,'hg','jj',1,'9999-12-31 23:59:59','9999-12-31 23:59:59');
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
  `RFC_Dr` varchar(10) NOT NULL,
  `NombreD` varchar(35) NOT NULL,
  `PaternoD` varchar(35) NOT NULL,
  `MaternoD` varchar(35) NOT NULL,
  `Estudiante` tinyint(1) NOT NULL,
  `Num_identificacion` varchar(12) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `psswdD` varchar(255) DEFAULT NULL,
  `psswdE` varchar(255) DEFAULT NULL,
  `TipoD` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id_Doctor`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctores`
--

LOCK TABLES `doctores` WRITE;
/*!40000 ALTER TABLE `doctores` DISABLE KEYS */;
INSERT INTO `doctores` VALUES (1,'uuu','uuu','uuu','uuu','uuu',0,'uuu',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `doctores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enfermedades_diagnosticos`
--

DROP TABLE IF EXISTS `enfermedades_diagnosticos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enfermedades_diagnosticos` (
  `Id_Enfermedad` int NOT NULL AUTO_INCREMENT,
  `NombreEnf` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Enfermedad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enfermedades_diagnosticos`
--

LOCK TABLES `enfermedades_diagnosticos` WRITE;
/*!40000 ALTER TABLE `enfermedades_diagnosticos` DISABLE KEYS */;
/*!40000 ALTER TABLE `enfermedades_diagnosticos` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exploracion`
--

LOCK TABLES `exploracion` WRITE;
/*!40000 ALTER TABLE `exploracion` DISABLE KEYS */;
INSERT INTO `exploracion` VALUES (1,'12i','wdwd','wddwd','dwdwdw','wdwdwd','wdwdwd','wddd','wdwdwdwd','dwdwd','dwdwd','wdwdw','2020-05-19 02:40:55','2020-05-19 02:40:55');
/*!40000 ALTER TABLE `exploracion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `health_history`
--

DROP TABLE IF EXISTS `health_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `health_history` (
  `Id_HH` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `P1` tinyint(1) DEFAULT NULL,
  `P2` tinyint(1) DEFAULT NULL,
  `P3` tinyint(1) DEFAULT NULL,
  `P3_1` varchar(50) DEFAULT NULL,
  `P4` tinyint(1) DEFAULT NULL,
  `P4_1` varchar(50) DEFAULT NULL,
  `P4_2` datetime DEFAULT NULL,
  `P4_3` datetime DEFAULT NULL,
  `P5` tinyint(1) DEFAULT NULL,
  `P6` tinyint(1) DEFAULT NULL,
  `P7` tinyint(1) DEFAULT NULL,
  `P8` tinyint(1) DEFAULT NULL,
  `P9` tinyint(1) DEFAULT NULL,
  `P10` tinyint(1) DEFAULT NULL,
  `P11` tinyint(1) DEFAULT NULL,
  `P12` tinyint(1) DEFAULT NULL,
  `P13` tinyint(1) DEFAULT NULL,
  `P14` tinyint(1) DEFAULT NULL,
  `P15` tinyint(1) DEFAULT NULL,
  `P16` tinyint(1) DEFAULT NULL,
  `P17` tinyint(1) DEFAULT NULL,
  `P18` tinyint(1) DEFAULT NULL,
  `P19` tinyint(1) DEFAULT NULL,
  `P20` tinyint(1) DEFAULT NULL,
  `P21` tinyint(1) DEFAULT NULL,
  `P22` tinyint(1) DEFAULT NULL,
  `P23` tinyint(1) DEFAULT NULL,
  `P24` tinyint(1) DEFAULT NULL,
  `P25` tinyint(1) DEFAULT NULL,
  `P26` tinyint(1) DEFAULT NULL,
  `P27` tinyint(1) DEFAULT NULL,
  `P28` tinyint(1) DEFAULT NULL,
  `P29` tinyint(1) DEFAULT NULL,
  `P30` tinyint(1) DEFAULT NULL,
  `P31` tinyint(1) DEFAULT NULL,
  `P32` tinyint(1) DEFAULT NULL,
  `P33` tinyint(1) DEFAULT NULL,
  `P34` tinyint(1) DEFAULT NULL,
  `P35` tinyint(1) DEFAULT NULL,
  `P36` tinyint(1) DEFAULT NULL,
  `P37` tinyint(1) DEFAULT NULL,
  `P38` tinyint(1) DEFAULT NULL,
  `P39` tinyint(1) DEFAULT NULL,
  `P40` tinyint(1) DEFAULT NULL,
  `P41` tinyint(1) DEFAULT NULL,
  `P42` tinyint(1) DEFAULT NULL,
  `P43` tinyint(1) DEFAULT NULL,
  `P44` tinyint(1) DEFAULT NULL,
  `P45` tinyint(1) DEFAULT NULL,
  `P46` tinyint(1) DEFAULT NULL,
  `P47` tinyint(1) DEFAULT NULL,
  `P48` tinyint(1) DEFAULT NULL,
  `P49` tinyint(1) DEFAULT NULL,
  `P50` tinyint(1) DEFAULT NULL,
  `P51` tinyint(1) DEFAULT NULL,
  `P52` tinyint(1) DEFAULT NULL,
  `P53` tinyint(1) DEFAULT NULL,
  `P54` tinyint(1) DEFAULT NULL,
  `P55` tinyint(1) DEFAULT NULL,
  `P56` tinyint(1) DEFAULT NULL,
  `P57` tinyint(1) DEFAULT NULL,
  `P58` tinyint(1) DEFAULT NULL,
  `P59` tinyint(1) DEFAULT NULL,
  `P60` tinyint(1) DEFAULT NULL,
  `P61` tinyint(1) DEFAULT NULL,
  `P62` tinyint(1) DEFAULT NULL,
  `P62_1` varchar(50) DEFAULT NULL,
  `P63` tinyint(1) DEFAULT NULL,
  `P64` tinyint(1) DEFAULT NULL,
  `P65` tinyint(1) DEFAULT NULL,
  `P66` tinyint(1) DEFAULT NULL,
  `P67` tinyint(1) DEFAULT NULL,
  `P67_1` varchar(50) DEFAULT NULL,
  `fecha_hh` datetime DEFAULT NULL,
  `FirmaP` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_HH`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `health_history_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `health_history`
--

LOCK TABLES `health_history` WRITE;
/*!40000 ALTER TABLE `health_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `health_history` ENABLE KEYS */;
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
  `InPlacaTotal` int DEFAULT NULL,
  `InSarroTotal` int DEFAULT NULL,
  `TotalInIHOS` int DEFAULT NULL,
  `TerPlacaTotal` int DEFAULT NULL,
  `TerSarroTotal` int DEFAULT NULL,
  `TotalTerIHOS` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_IHOS`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `ihos_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ihos`
--

LOCK TABLES `ihos` WRITE;
/*!40000 ALTER TABLE `ihos` DISABLE KEYS */;
/*!40000 ALTER TABLE `ihos` ENABLE KEYS */;
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
  `1_Enfermedades` varchar(150) DEFAULT NULL,
  `2_Diagnosticos` varchar(150) DEFAULT NULL,
  `3_Alergia_Penicilina` tinyint(1) DEFAULT NULL,
  `3_1_Alergia_Otros` tinyint(1) DEFAULT NULL,
  `3_2_Cuales` varchar(150) DEFAULT NULL,
  `4_Anestesia` tinyint(1) DEFAULT NULL,
  `4_1_Problema_Anestesia` tinyint(1) DEFAULT NULL,
  `4_2_Descripcion` varchar(150) DEFAULT NULL,
  `5_SangraMucho` tinyint(1) DEFAULT NULL,
  `5_1_HemorragiaFrec` tinyint(1) DEFAULT NULL,
  `6_UsaAnti` tinyint(1) DEFAULT NULL,
  `6_1_UsaTranqui` tinyint(1) DEFAULT NULL,
  `6_2_Descripcion` varchar(150) DEFAULT NULL,
  `6_3_Otros_Med` tinyint(1) DEFAULT NULL,
  `6_4_Descripcion` varchar(150) DEFAULT NULL,
  `7_ParienteDiabetico` tinyint(1) DEFAULT NULL,
  `7_1_Cuales` varchar(150) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Interrogatorio`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `interrogacion_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interrogacion`
--

LOCK TABLES `interrogacion` WRITE;
/*!40000 ALTER TABLE `interrogacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `interrogacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `odontograma`
--

DROP TABLE IF EXISTS `odontograma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `odontograma` (
  `Id_Odontograma` int NOT NULL AUTO_INCREMENT,
  `Id_Status` int NOT NULL,
  `DDS18` varchar(5) DEFAULT NULL,
  `DDS17` varchar(5) DEFAULT NULL,
  `DDS16` varchar(5) DEFAULT NULL,
  `DDS15` varchar(5) DEFAULT NULL,
  `DDS14` varchar(5) DEFAULT NULL,
  `DDS13` varchar(5) DEFAULT NULL,
  `DDS12` varchar(5) DEFAULT NULL,
  `DDS11` varchar(5) DEFAULT NULL,
  `DDS55` varchar(5) DEFAULT NULL,
  `DDS54` varchar(5) DEFAULT NULL,
  `DDS53` varchar(5) DEFAULT NULL,
  `DDS52` varchar(5) DEFAULT NULL,
  `DDS51` varchar(5) DEFAULT NULL,
  `DIS28` varchar(5) DEFAULT NULL,
  `DIS27` varchar(5) DEFAULT NULL,
  `DIS26` varchar(5) DEFAULT NULL,
  `DIS25` varchar(5) DEFAULT NULL,
  `DIS24` varchar(5) DEFAULT NULL,
  `DIS23` varchar(5) DEFAULT NULL,
  `DIS22` varchar(5) DEFAULT NULL,
  `DIS21` varchar(5) DEFAULT NULL,
  `DIS65` varchar(5) DEFAULT NULL,
  `DIS64` varchar(5) DEFAULT NULL,
  `DIS63` varchar(5) DEFAULT NULL,
  `DIS62` varchar(5) DEFAULT NULL,
  `DIS61` varchar(5) DEFAULT NULL,
  `DDI48` varchar(5) DEFAULT NULL,
  `DDI47` varchar(5) DEFAULT NULL,
  `DDI46` varchar(5) DEFAULT NULL,
  `DDI45` varchar(5) DEFAULT NULL,
  `DDI44` varchar(5) DEFAULT NULL,
  `DDI43` varchar(5) DEFAULT NULL,
  `DDI42` varchar(5) DEFAULT NULL,
  `DDI41` varchar(5) DEFAULT NULL,
  `DDI85` varchar(5) DEFAULT NULL,
  `DDI84` varchar(5) DEFAULT NULL,
  `DDI83` varchar(5) DEFAULT NULL,
  `DDI82` varchar(5) DEFAULT NULL,
  `DDI81` varchar(5) DEFAULT NULL,
  `DII38` varchar(5) DEFAULT NULL,
  `DII37` varchar(5) DEFAULT NULL,
  `DII36` varchar(5) DEFAULT NULL,
  `DII35` varchar(5) DEFAULT NULL,
  `DII34` varchar(5) DEFAULT NULL,
  `DII33` varchar(5) DEFAULT NULL,
  `DII32` varchar(5) DEFAULT NULL,
  `DII31` varchar(5) DEFAULT NULL,
  `DII75` varchar(5) DEFAULT NULL,
  `DII74` varchar(5) DEFAULT NULL,
  `DII73` varchar(5) DEFAULT NULL,
  `DII72` varchar(5) DEFAULT NULL,
  `DII71` varchar(5) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Odontograma`),
  KEY `Id_Status` (`Id_Status`),
  CONSTRAINT `odontograma_ibfk_1` FOREIGN KEY (`Id_Status`) REFERENCES `status` (`Id_Status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `odontograma`
--

LOCK TABLES `odontograma` WRITE;
/*!40000 ALTER TABLE `odontograma` DISABLE KEYS */;
/*!40000 ALTER TABLE `odontograma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patogenos_alergias`
--

DROP TABLE IF EXISTS `patogenos_alergias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patogenos_alergias` (
  `Id_Patogeno` int NOT NULL AUTO_INCREMENT,
  `NombrePat` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Patogeno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patogenos_alergias`
--

LOCK TABLES `patogenos_alergias` WRITE;
/*!40000 ALTER TABLE `patogenos_alergias` DISABLE KEYS */;
/*!40000 ALTER TABLE `patogenos_alergias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `Id_Status` int NOT NULL AUTO_INCREMENT,
  `DescriS` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_poblacion`
--

DROP TABLE IF EXISTS `tipo_poblacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_poblacion` (
  `Id_Poblacion` int NOT NULL AUTO_INCREMENT,
  `Nombre_TipoP` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_Poblacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_poblacion`
--

LOCK TABLES `tipo_poblacion` WRITE;
/*!40000 ALTER TABLE `tipo_poblacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_poblacion` ENABLE KEYS */;
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

--
-- Table structure for table `x100_placadb`
--

DROP TABLE IF EXISTS `x100_placadb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `x100_placadb` (
  `Id_X100` int NOT NULL AUTO_INCREMENT,
  `Id_Paciente` varchar(13) NOT NULL,
  `IDDS18` varchar(5) DEFAULT NULL,
  `IDDS17` varchar(5) DEFAULT NULL,
  `IDDS16` varchar(5) DEFAULT NULL,
  `IDDS15` varchar(5) DEFAULT NULL,
  `IDDS14` varchar(5) DEFAULT NULL,
  `IDDS13` varchar(5) DEFAULT NULL,
  `IDDS12` varchar(5) DEFAULT NULL,
  `IDDS11` varchar(5) DEFAULT NULL,
  `IDDS55` varchar(5) DEFAULT NULL,
  `IDDS54` varchar(5) DEFAULT NULL,
  `IDDS53` varchar(5) DEFAULT NULL,
  `IDDS52` varchar(5) DEFAULT NULL,
  `IDDS51` varchar(5) DEFAULT NULL,
  `IDIS28` varchar(5) DEFAULT NULL,
  `IDIS27` varchar(5) DEFAULT NULL,
  `IDIS26` varchar(5) DEFAULT NULL,
  `IDIS25` varchar(5) DEFAULT NULL,
  `IDIS24` varchar(5) DEFAULT NULL,
  `IDIS23` varchar(5) DEFAULT NULL,
  `IDIS22` varchar(5) DEFAULT NULL,
  `IDIS21` varchar(5) DEFAULT NULL,
  `IDIS65` varchar(5) DEFAULT NULL,
  `IDIS64` varchar(5) DEFAULT NULL,
  `IDIS63` varchar(5) DEFAULT NULL,
  `IDIS62` varchar(5) DEFAULT NULL,
  `IDIS61` varchar(5) DEFAULT NULL,
  `IDDI48` varchar(5) DEFAULT NULL,
  `IDDI47` varchar(5) DEFAULT NULL,
  `IDDI46` varchar(5) DEFAULT NULL,
  `IDDI45` varchar(5) DEFAULT NULL,
  `IDDI44` varchar(5) DEFAULT NULL,
  `IDDI43` varchar(5) DEFAULT NULL,
  `IDDI42` varchar(5) DEFAULT NULL,
  `IDDI41` varchar(5) DEFAULT NULL,
  `IDDI85` varchar(5) DEFAULT NULL,
  `IDDI84` varchar(5) DEFAULT NULL,
  `IDDI83` varchar(5) DEFAULT NULL,
  `IDDI82` varchar(5) DEFAULT NULL,
  `IDDI81` varchar(5) DEFAULT NULL,
  `IDII38` varchar(5) DEFAULT NULL,
  `IDII37` varchar(5) DEFAULT NULL,
  `IDII36` varchar(5) DEFAULT NULL,
  `IDII35` varchar(5) DEFAULT NULL,
  `IDII34` varchar(5) DEFAULT NULL,
  `IDII33` varchar(5) DEFAULT NULL,
  `IDII32` varchar(5) DEFAULT NULL,
  `IDII31` varchar(5) DEFAULT NULL,
  `IDII75` varchar(5) DEFAULT NULL,
  `IDII74` varchar(5) DEFAULT NULL,
  `IDII73` varchar(5) DEFAULT NULL,
  `IDII72` varchar(5) DEFAULT NULL,
  `IDII71` varchar(5) DEFAULT NULL,
  `ADDS18` varchar(5) DEFAULT NULL,
  `ADDS17` varchar(5) DEFAULT NULL,
  `ADDS16` varchar(5) DEFAULT NULL,
  `ADDS15` varchar(5) DEFAULT NULL,
  `ADDS14` varchar(5) DEFAULT NULL,
  `ADDS13` varchar(5) DEFAULT NULL,
  `ADDS12` varchar(5) DEFAULT NULL,
  `ADDS11` varchar(5) DEFAULT NULL,
  `ADDS55` varchar(5) DEFAULT NULL,
  `ADDS54` varchar(5) DEFAULT NULL,
  `ADDS53` varchar(5) DEFAULT NULL,
  `ADDS52` varchar(5) DEFAULT NULL,
  `ADDS51` varchar(5) DEFAULT NULL,
  `ADIS28` varchar(5) DEFAULT NULL,
  `ADIS27` varchar(5) DEFAULT NULL,
  `ADIS26` varchar(5) DEFAULT NULL,
  `ADIS25` varchar(5) DEFAULT NULL,
  `ADIS24` varchar(5) DEFAULT NULL,
  `ADIS23` varchar(5) DEFAULT NULL,
  `ADIS22` varchar(5) DEFAULT NULL,
  `ADIS21` varchar(5) DEFAULT NULL,
  `ADIS65` varchar(5) DEFAULT NULL,
  `ADIS64` varchar(5) DEFAULT NULL,
  `ADIS63` varchar(5) DEFAULT NULL,
  `ADIS62` varchar(5) DEFAULT NULL,
  `ADIS61` varchar(5) DEFAULT NULL,
  `ADDI48` varchar(5) DEFAULT NULL,
  `ADDI47` varchar(5) DEFAULT NULL,
  `ADDI46` varchar(5) DEFAULT NULL,
  `ADDI45` varchar(5) DEFAULT NULL,
  `ADDI44` varchar(5) DEFAULT NULL,
  `ADDI43` varchar(5) DEFAULT NULL,
  `ADDI42` varchar(5) DEFAULT NULL,
  `ADDI41` varchar(5) DEFAULT NULL,
  `ADDI85` varchar(5) DEFAULT NULL,
  `ADDI84` varchar(5) DEFAULT NULL,
  `ADDI83` varchar(5) DEFAULT NULL,
  `ADDI82` varchar(5) DEFAULT NULL,
  `ADDI81` varchar(5) DEFAULT NULL,
  `ADII38` varchar(5) DEFAULT NULL,
  `ADII37` varchar(5) DEFAULT NULL,
  `ADII36` varchar(5) DEFAULT NULL,
  `ADII35` varchar(5) DEFAULT NULL,
  `ADII34` varchar(5) DEFAULT NULL,
  `ADII33` varchar(5) DEFAULT NULL,
  `ADII32` varchar(5) DEFAULT NULL,
  `ADII31` varchar(5) DEFAULT NULL,
  `ADII75` varchar(5) DEFAULT NULL,
  `ADII74` varchar(5) DEFAULT NULL,
  `ADII73` varchar(5) DEFAULT NULL,
  `ADII72` varchar(5) DEFAULT NULL,
  `ADII71` varchar(5) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`Id_X100`),
  KEY `Id_Paciente` (`Id_Paciente`),
  CONSTRAINT `x100_placadb_ibfk_1` FOREIGN KEY (`Id_Paciente`) REFERENCES `datos_personales` (`Id_Paciente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `x100_placadb`
--

LOCK TABLES `x100_placadb` WRITE;
/*!40000 ALTER TABLE `x100_placadb` DISABLE KEYS */;
/*!40000 ALTER TABLE `x100_placadb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-17 20:38:16

CREATE DATABASE  IF NOT EXISTS `clidesa` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `clidesa`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: clidesa
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `calendario`
--

DROP TABLE IF EXISTS `calendario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calendario` (
  `IdCalendario` int NOT NULL AUTO_INCREMENT,
  `HoraLlegada` time DEFAULT NULL,
  `HoraSalida` time DEFAULT NULL,
  `recorridoIdRecorrido` int NOT NULL,
  `choferCuil` bigint NOT NULL,
  PRIMARY KEY (`IdCalendario`),
  KEY `FK_4d17892fdcef4d923070d57bb3c` (`recorridoIdRecorrido`),
  KEY `FK_18834f4cc76f8c129ed78a20de5` (`choferCuil`),
  CONSTRAINT `FK_18834f4cc76f8c129ed78a20de5` FOREIGN KEY (`choferCuil`) REFERENCES `chofer` (`Cuil`),
  CONSTRAINT `FK_4d17892fdcef4d923070d57bb3c` FOREIGN KEY (`recorridoIdRecorrido`) REFERENCES `recorrido` (`IdRecorrido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendario`
--

LOCK TABLES `calendario` WRITE;
/*!40000 ALTER TABLE `calendario` DISABLE KEYS */;
/*!40000 ALTER TABLE `calendario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chofer`
--

DROP TABLE IF EXISTS `chofer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chofer` (
  `Cuil` bigint NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellido` varchar(50) NOT NULL,
  `Telefono` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Provincia` varchar(100) NOT NULL,
  `Localidad` varchar(100) NOT NULL,
  `Domicilio` varchar(100) NOT NULL,
  `lineaColectivoIdLineaColectivo` int NOT NULL,
  PRIMARY KEY (`Cuil`),
  UNIQUE KEY `IDX_7e36a8d0e27ebf2a651d3d47ec` (`Apellido`),
  UNIQUE KEY `IDX_b190945d8354766444e2553f47` (`Telefono`),
  UNIQUE KEY `IDX_e260dd3775e0e76a86a9ae909e` (`Email`),
  KEY `FK_ee5d0ac9b71e05d6260ba6da362` (`lineaColectivoIdLineaColectivo`),
  CONSTRAINT `FK_ee5d0ac9b71e05d6260ba6da362` FOREIGN KEY (`lineaColectivoIdLineaColectivo`) REFERENCES `linea_colectivo` (`idLineaColectivo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chofer`
--

LOCK TABLES `chofer` WRITE;
/*!40000 ALTER TABLE `chofer` DISABLE KEYS */;
INSERT INTO `chofer` (`Cuil`, `Nombre`, `Apellido`, `Telefono`, `Email`, `Provincia`, `Localidad`, `Domicilio`, `lineaColectivoIdLineaColectivo`) VALUES (23114565287,'Mariano','Perez','341-5555789','mPerez@gmail.com','Santa Fe','Rosario','Sarmiento 333',1);
/*!40000 ALTER TABLE `chofer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `Cuit` bigint NOT NULL,
  `RazonSocial` varchar(200) NOT NULL,
  `Provincia` varchar(100) NOT NULL,
  `Localidad` varchar(100) NOT NULL,
  `Domicilio` varchar(100) NOT NULL,
  `Telefono` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  PRIMARY KEY (`Cuit`),
  UNIQUE KEY `IDX_968ea0416390cfcb0fc530cc74` (`RazonSocial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` (`Cuit`, `RazonSocial`, `Provincia`, `Localidad`, `Domicilio`, `Telefono`, `Email`) VALUES (132654897,'Guemes','Santa Fe','Rosario','Santa Fe 1234','341-425262','guemes@gmail.com'),(741285936,'Urquiza','Santa Fe','Rosario','Santa Fe 4321','341-421123','urquiza@gmail.com'),(12345541458,'Monticas','Santa Fe','Rosario','Santa Fe 4322','341-421234','monticas@gmail.com');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linea_colectivo`
--

DROP TABLE IF EXISTS `linea_colectivo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `linea_colectivo` (
  `idLineaColectivo` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `empresaCuit` bigint NOT NULL,
  PRIMARY KEY (`idLineaColectivo`),
  UNIQUE KEY `IDX_9f3c704bb6b7da8da36430f4f7` (`nombre`),
  KEY `FK_7d1c079d6b22021bd82d02488c6` (`empresaCuit`),
  CONSTRAINT `FK_7d1c079d6b22021bd82d02488c6` FOREIGN KEY (`empresaCuit`) REFERENCES `empresa` (`Cuit`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linea_colectivo`
--

LOCK TABLES `linea_colectivo` WRITE;
/*!40000 ALTER TABLE `linea_colectivo` DISABLE KEYS */;
INSERT INTO `linea_colectivo` (`idLineaColectivo`, `nombre`, `latitud`, `longitud`, `empresaCuit`) VALUES (1,'k testeado',123413123,32153245,741285936),(2,'K',321312312,123214561,132654897),(4,'111',12324567,12988976,132654897);
/*!40000 ALTER TABLE `linea_colectivo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parada`
--

DROP TABLE IF EXISTS `parada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parada` (
  `NroParada` int NOT NULL AUTO_INCREMENT,
  `Latitud` double NOT NULL,
  `Longitud` double NOT NULL,
  `Calle` varchar(50) NOT NULL,
  `recorridoIdRecorrido` int NOT NULL,
  PRIMARY KEY (`NroParada`),
  KEY `FK_c30aae5974a4dff6fbd5f202ad9` (`recorridoIdRecorrido`),
  CONSTRAINT `FK_c30aae5974a4dff6fbd5f202ad9` FOREIGN KEY (`recorridoIdRecorrido`) REFERENCES `recorrido` (`IdRecorrido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parada`
--

LOCK TABLES `parada` WRITE;
/*!40000 ALTER TABLE `parada` DISABLE KEYS */;
/*!40000 ALTER TABLE `parada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recorrido`
--

DROP TABLE IF EXISTS `recorrido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recorrido` (
  `IdRecorrido` int NOT NULL AUTO_INCREMENT,
  `RecorridoDesde` varchar(50) NOT NULL,
  `RecorridoHasta` varchar(50) NOT NULL,
  `lineaColectivoIdLineaColectivo` int NOT NULL,
  PRIMARY KEY (`IdRecorrido`),
  KEY `FK_1a58ba5389ba9fd250b70c6de67` (`lineaColectivoIdLineaColectivo`),
  CONSTRAINT `FK_1a58ba5389ba9fd250b70c6de67` FOREIGN KEY (`lineaColectivoIdLineaColectivo`) REFERENCES `linea_colectivo` (`idLineaColectivo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recorrido`
--

LOCK TABLES `recorrido` WRITE;
/*!40000 ALTER TABLE `recorrido` DISABLE KEYS */;
/*!40000 ALTER TABLE `recorrido` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-03 23:29:46

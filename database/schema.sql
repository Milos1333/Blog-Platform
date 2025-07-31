-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: bplog
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `category` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (29,67,'The Power of Morning Routines','A strong morning routine sets the tone for a productive day. Starting with just 10 minutes of journaling or a quick walk can improve your focus and reduce stress.\nSuccess isn’t just about working harder — it’s also about preparing smarter. Your morning matters more than you think.','Personal Growth','http://localhost:5000/uploads/1752700046213-Screenshot 2024-12-02 171612.png','2025-07-26 22:00:00'),(34,68,'Exploring the Future of AI','Artificial Intelligence continues to transform industries, from healthcare to transportation. In this post, we explore where AI is headed and how it might shape our daily lives in the next decade.','Technology','http://localhost:5000/uploads/1753285861220-2150038859.jpg','2025-07-06 22:00:00'),(35,68,' Top 5 Indie Games You Shouldn\'t Miss in 2025','Indie developers are creating some of the most original titles this year. From emotional narratives to unique art styles, here are five indie games that stand out.','Reviews','http://localhost:5000/uploads/1753287397393-2149829122.jpg','2025-07-29 22:00:00'),(36,69,'How to Foster Growth Mindset for Success','Learn practical strategies to develop a growth mindset that helps you overcome challenges.','Personal Growth','http://localhost:5000/uploads/1753288444507-52407.jpg','2025-07-20 22:00:00'),(37,69,'Design Trends to Watch in 2025','From minimalism to bold colors, discover the hottest design trends this year.','Design','http://localhost:5000/uploads/1753288825437-23434101_2.jpg','2025-10-14 22:00:00');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `userImage` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (19,'I really like that I can see other users\' reviews and write my own. The platform feels intuitive and safe to use.','Lebron','http://localhost:5000/uploads/1753387937345-licensed-image.jpeg','2025-07-24 20:13:11'),(32,'A great platform for gaming and tech enthusiasts. Loads fast, the reviews are solid, and the interface is clean and intuitive.','Alex','http://localhost:5000/uploads/1753288306785-creatorOfBlog.jpg','2025-07-24 20:17:52'),(33,'Clean UI, smooth performance, and intuitive features. Deleting tasks is instant and easy. Great user experience overall.','Klepas1','http://localhost:5000/uploads/1753212684633-Screenshot 2023-12-12 143918.png','2025-07-26 16:33:48'),(34,'Fast and reliable! Task deletion works perfectly and the app feels responsive. Very satisfied with the overall design and usability.','Klepas1','http://localhost:5000/uploads/1753212684633-Screenshot 2023-12-12 143918.png','2025-07-26 16:34:09');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'korisnik1','korisnik1@mail.com','$2b$10$IIUfDGp5m6pRI0AtM4RNr.PjPPtK.j8.RG22bgqctjBiydMGVh6oe','2025-06-10 19:34:46',NULL),(2,'korisnik2','korisniks1@mail.com','$2b$10$tXt7lGzi2md1FWJa9dEYSeWBjEAYwCS2UlaZs7ZrbUBLE6Jc.RhQG','2025-06-10 19:37:40',NULL),(5,'korisnik23','korisnsdikss1@gmail.com','$2b$10$Qf/OuEq20zL79xvJXE033O37AxlfXTcr.puGDc6tDlmAXxP7yPuE.','2025-06-10 19:38:45',NULL),(6,'korisniks23','korisnsdiksss1@gmail.com','$2b$10$WJQ9oRxkD8visU8Z/fvyG.OXVo08Fv6U42KmuO1qgZz4PTBQmw7qK','2025-06-10 19:39:43',NULL),(7,'dasas','milosklepic91@gmail.com','$2b$10$Gg.NwUTvUoqY77VRzwuyDOR0G4LMPlAUZHv1Jv54NM.ear2Ei.vIS','2025-06-11 15:47:03',NULL),(8,'Klepas','milosklepic90@gmail.com','$2b$10$svSShQ8tYCgHygaMCrFIcendg/GYWefThYMuxzEKmhRQ6GKI36xQq','2025-06-11 15:51:48',NULL),(14,'dasads','milosklepic91@dsagmail.com','$2b$10$k/5naBrExOAgsVVAJkrerOmNnKT4x32XQiqD5zg7Uai.dUrykKyxe','2025-06-11 17:51:41',NULL),(18,'asdsadsadds','milosklepic911@gmail.com','$2b$10$UlMHsRkCckH4GsXUzu7w2ODgxNL/lCyshM7OhDharMAASlqXDC9ai','2025-06-11 17:59:07',NULL),(19,'dsasd','milosklepic912@gmail.com','$2b$10$cP4isWMEdlFv5rlJwhlgLOhce1IXvavFyLCLVYpweXYpYUeeny4PK','2025-06-11 18:02:31',NULL),(20,'sdasda','milosklepic921@gmail.com','$2b$10$7p3fyNhxC0dRGM8c4YxFyu4iETlxBf2e/h6PDUPZFgcfw16zambP.','2025-06-11 18:07:05',NULL),(21,'adasdsaadsads','milosklepic9122@gmail.com','$2b$10$BcGMf9XsX.Mg2cOP6rC9uuuXZjoCp454FxE/D8oLFkdOC3PsBtc1.','2025-06-11 18:24:41',NULL),(22,'adsdasaads','milosklepic912222@gmail.com','$2b$10$/kz0CbHL6RyMKFKj/6AXg.iz/N/Uu9JuSScYLSEgebM/DvtuF3Fxq','2025-06-11 18:46:29',NULL),(27,'Klepassasa','milosklepic91222@gmail.com','$2b$10$Teosjs34HZx957xD/CSfRedOrQqBxsh4krsQoYTdilFgkjRjAbRiO','2025-06-11 18:56:42',NULL),(60,'Klepas123w','milosklepic9221@gmail.com','$2b$10$tNM9/wfmUmcA8qyWa1zmNuqmB41Un1ZcWPj0mNQ1OS6ST6D0t/i.6','2025-06-11 19:02:10',NULL),(61,'Klepassss','milosklepic9122222@gmail.com','$2b$10$BTZ0unjPZUOHjuWCil4LdeU7WtM5/FtmCLRtX0EJBi5tg2AwAY7cu','2025-06-11 19:22:30',NULL),(62,'asdadssad','milosklepic922221@gmail.com','$2b$10$2K0PssmXVAiNn3AOro6HjOOUY4Uf0xRaTTSGtR.r8mOvHMM8qUS/W','2025-06-11 19:42:26',NULL),(63,'asdadadsads','milosklepic92221@gmail.com','$2b$10$iFu87bF4jnp4QXABO/d7geAmZzuUedH4H1zhbJ6u/s9qCxOUFj2Le','2025-06-11 19:54:12',NULL),(64,'dsadasadssadsa','milosklepic91sadadss@gmail.com','$2b$10$LcdyjrGc3iltd.CPZJohaOvlvCcadMPmbkalAj94UUqZjV6AHufy2','2025-06-11 19:54:31',NULL),(65,'Klepas12231','milosklepic91334223@gmail.com','$2b$10$GE1vHHGxUDN.U1dB2Cz9beORZCVjgvbb7cY7wWb8OpS9.Kv2fS14K','2025-06-12 12:06:56',NULL),(66,'Adrijana','adrijanaklepic@gmail.com','$2b$10$P30S2t5kTPq9rs0Y8vNEsewGrWO9cpf4yt9lZIWunbYuFJS.IwaqC','2025-07-16 20:51:34',NULL),(67,'Violeta','violeta@gmail.com','$2b$10$6XO0ZVWe764FSPHh27gzi.JtLHWEwxaAFMKUIz80HYG9T3xHy76Iq','2025-07-16 21:02:03',NULL),(68,'Klepas1','milosklepic900@gmail.com','$2b$10$K493iIJG97D22xOgfLFeEu8zI90uaKe.wYFPndGjortaLhiBO2y2W','2025-07-22 19:31:24','/uploads/1753212684633-Screenshot 2023-12-12 143918.png'),(69,'Alex','alex@gmail.com','$2b$10$1NtKlfwm1/VKub8F9sV5buA3.Bb5NNO/BW7fbRhMjxqGD3SbMkxQi','2025-07-23 16:31:46','/uploads/1753288306785-creatorOfBlog.jpg'),(70,'Lebron','lebron@gmail.com','$2b$10$adv.1SsnjMQsnQo5feQhKuDbQDXY4.Uc8YMOu2G9IrNYCOVPnToZS','2025-07-24 20:12:17','/uploads/1753387937345-licensed-image.jpeg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-31  1:58:41

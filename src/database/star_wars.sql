-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 10, 2020 at 03:08 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `star_wars`
--

-- --------------------------------------------------------

--
-- Table structure for table `ships`
--

DROP TABLE IF EXISTS `ships`;
CREATE TABLE IF NOT EXISTS `ships` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `manufacturer` varchar(100) DEFAULT NULL,
  `cost_in_credits` varchar(5000) DEFAULT NULL,
  `length` varchar(5000) DEFAULT NULL,
  `crew` varchar(5000) DEFAULT NULL,
  `passengers` varchar(5000) DEFAULT NULL,
  `cargo_capacity` varchar(5000) DEFAULT NULL,
  `hyperdrive_rating` varchar(100) DEFAULT NULL,
  `starship_class` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ships`
--

INSERT INTO `ships` (`id`, `name`, `model`, `manufacturer`, `cost_in_credits`, `length`, `crew`, `passengers`, `cargo_capacity`, `hyperdrive_rating`, `starship_class`) VALUES
(1, 'Death Star', 'DS-1 Orbital Battle Station', 'Imperial Department of Military Research, Sienar Fleet Systems', '1000000000000', '120000', '342,953', '843,342', '1000000000000', '4.0', 'Deep Space Mobile Battlestation'),
(5, 'CR90 corvette', 'CR90 corvette', 'Corellian Engineering Corporation', '3500000', '150', '165', '600', '3000000', '2.0', 'corvette'),
(6, 'Star Destroyer', 'Imperial I-class Star Destroyer', 'Kuat Drive Yards', '150000000', '1,600', '47,060', '600', '36000000', '2.0', 'Star Destroyer'),
(7, 'Sentinel-class landing craft', 'Sentinel-class landing craft', 'Sienar Fleet Systems, Cyngus Spaceworks', '240000', '38', '5', '75', '180000', '1.0', 'landing craft'),
(8, 'Millennium Falcon', 'YT-1300 light freighter', 'Corellian Engineering Corporation', '100000', '34.37', '4', '6', '100000', '0.5', 'Light freighter'),
(9, 'Y-wing', 'BTL Y-wing', 'Koensayr Manufacturing', '134999', '14', '2', 'N/A', '110', '1.0', 'assault starfighter'),
(10, 'X-wing', 'T-65 X-wing', 'Incom Corporation', '149999', '12.5', '1', 'N/A', '110', '1.0', 'Starfighter'),
(11, 'TIE Advanced x1', 'Twin Ion Engine Advanced x1', 'Sienar Fleet Systems', 'unknown', '9.2', '1', 'N/A', '150', '1.0', 'Starfighter'),
(12, 'Executor', 'Executor-class star dreadnought', 'Kuat Drive Yards, Fondor Shipyards', '1143350000', '19000', '279,144', '38000', '250000000', '2.0', 'Star dreadnought'),
(13, 'Rebel transport', 'GR-75 medium transport', 'Gallofree Yards, Inc.', 'unknown', '90', '6', '90', '19000000', '4.0', 'Medium transport'),
(14, 'Minstrel-class space yacht', 'Minstrel-class space yacht', 'Ubrikkian Industries', '1,450,000', '160', '37', '75', '90', '2.0', 'Medium transport'),
(15, 'Low Altitude Assault Transport/infantry', 'Low Altitude Assault Transport/infantry repulsorlift gunship', 'Rothana Heavy Engineering', 'unknown', '17.4', '4', '30', '17', '2.0', 'Gunship'),
(16, 'DP20 Frigate', 'DP20 frigate', 'Corellian Engineering Corporation', '4,800,000', '120', '101', 'N/A', '300', '2.0', 'Frigate'),
(17, 'Uumufalh', 'Uumufalh gunship', 'Yuuzhan Vong', '4,800,000', '615', '335', '840', '1,380', '3.0', 'Capital ship'),
(18, 'Warrior-class gunship', 'Warrior-class gunship', 'Republic Engineering Corporation', 'unknown', '190', '80', '10', '500', '1.0', 'Warrior-class gunship'),
(19, 'Sith escort gunship', 'Escort gunship', 'Sith Empire', 'unknown', '75', '18', '30', '250', '2.0', 'Escort gunship');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Feb 12, 2016 at 06:39 PM
-- Server version: 5.5.38
-- PHP Version: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `pinebirch`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
`ID` int(11) NOT NULL,
  `state` varchar(30) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total` decimal(15,2) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`ID`, `state`, `time`, `total`) VALUES
(1, 'started', '2016-02-11 23:03:57', 0.00);

-- --------------------------------------------------------

--
-- Table structure for table `cart_product`
--

CREATE TABLE `cart_product` (
`ID` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
`ID` int(11) NOT NULL,
  `categoryname` varchar(150) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`ID`, `categoryname`) VALUES
(1, 'animals'),
(2, 'vehicles'),
(3, 'instruments');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
`ID` int(11) NOT NULL,
  `SKU` varchar(100) NOT NULL,
  `name` varchar(150) NOT NULL,
  `price` decimal(15,2) NOT NULL,
  `stock` int(3) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `image` varchar(200) NOT NULL,
  `dateadded` date NOT NULL,
  `category` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ID`, `SKU`, `name`, `price`, `stock`, `description`, `image`, `dateadded`, `category`) VALUES
(1, 'AN-001', 'Jerry the Hedgehog', 51.00, 51, 'This little toy was crafted from the largest tree in South America. It can also roll around, which is good for kids, and adults!', './images/hedgehog.jpg', '2016-01-16', 1),
(2, 'IN-001', 'Wooden Xylophone', 57.00, 5, 'The perfect first instruments to teach kids about both rhythm and tone. This piece was crafted from the bones of King Tut himself.', './images/instrument3.jpg', '2016-01-12', 3),
(3, 'VE-001', 'Dual-Tone Helicopter', 46.00, 17, 'This helicopter will make you think you are in an actual aviary with the realism that it emanates. It was created in the 1600s by a family of wealthy British people. We stole the blueprints from their family gravesite for you pleasure!', './images/helicopter.jpg', '2016-01-12', 2),
(4, 'VE-002', 'Squiggly Toy Car', 35.00, 24, 'This is a toy car.', './images/car.jpg', '2016-02-05', 2),
(5, 'AN-002', 'Brontosaurus Rex', 42.00, 30, 'This is a dino.', './images/dino.jpg', '2016-02-02', 1),
(8, 'IN-002', 'Triple-Tone Drum', 45.00, 20, 'This is a great drum.', './images/drum.jpg', '2016-02-08', 3),
(9, 'AN-003', 'Oak Rolling Duck', 24.00, 19, 'Cutest duck evar.', './images/duck.jpg', '2016-02-25', 1),
(10, 'AN-004', 'Cute Bowing Elephant', 28.00, 200, 'Elephant of your dreams.', './images/elephant.jpg', '2016-02-19', 1),
(11, 'IN-003', 'Musical Scraper', 60.00, 2, 'Scrapes like a dream.', './images/instrument.jpg', '2016-02-15', 3),
(12, 'IN-004', 'Dual-Tone Woodblock', 33.00, 8, 'Two tones. Can you dig it?', './images/instrument2.jpg', '2016-01-05', 3),
(13, 'VE-003', 'Functioning Excavator', 48.00, 43, 'Dig a really insignificant hole.', './images/truck.jpg', '2016-02-11', 2),
(14, 'VE-004', 'Loghouse Truck', 39.00, 12, 'Once a house, now a truck.', './images/truck2.jpg', '2016-02-17', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
`ID` int(11) NOT NULL,
  `email` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `email`, `password`) VALUES
(1, 'e_schram@hotmail.com', 'emma'),
(2, 'shaescotten@gmail.com', 'shae'),
(3, 'arron@email.com', 'arron');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cart_product`
--
ALTER TABLE `cart_product`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
 ADD PRIMARY KEY (`ID`), ADD KEY `category` (`category`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `cart_product`
--
ALTER TABLE `cart_product`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`ID`);
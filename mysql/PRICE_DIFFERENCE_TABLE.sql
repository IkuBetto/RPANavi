DROP TABLE IF EXISTS PRICE_DIFFERENCE_TABLE;
CREATE TABLE `PRICE_DIFFERENCE_TABLE` (
  `No` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `kakakucom_price` int(7) NOT NULL,
  `rakuten_price` int(7) NOT NULL,
  `yahoo_price` int(7) NOT NULL,
  `amazon_price` int(7) NOT NULL,
  `price_difference_rakuten` int(7) NOT NULL,
  `price_difference_yahoo` int(7) NOT NULL,
  `price_difference_amazon` int(7) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `update_person` varchar(30) NOT NULL DEFAULT 'system',
  PRIMARY KEY (`No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

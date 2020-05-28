DROP TABLE IF EXISTS SELL_PRICE_TABLE;
CREATE TABLE `SELL_PRICE_TABLE` (
  `No` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `kakakucom_price` int(7) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `rank` int(3) NOT NULL,
  `average_price` int(7) NOT NULL,
  `purchase_url` varchar(1000) NOT NULL,
  `ecsite_name` varchar(50) NOT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `update_person` varchar(30) NOT NULL DEFAULT 'system',
  PRIMARY KEY (`No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
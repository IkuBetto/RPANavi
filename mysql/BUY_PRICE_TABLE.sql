DROP TABLE IF EXISTS BUY_PRICE_TABLE;
CREATE TABLE `BUY_PRICE_TABLE` (
  `No` int(11) NOT NULL AUTO_INCREMENT,
  `ecsite_id` int(3) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `buy_price` int(7),
  `point` int(5) NOT NULL,
  `derivery_fee` int(5),
  `derivery_days` timestamp,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `purchase_url` varchar(1000) NOT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `update_person` varchar(30) NOT NULL DEFAULT 'system',
  PRIMARY KEY (`No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

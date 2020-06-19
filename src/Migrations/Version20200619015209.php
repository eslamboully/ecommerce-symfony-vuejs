<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200619015209 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE trademarks CHANGE icon icon VARCHAR(180) DEFAULT NULL');
        $this->addSql('ALTER TABLE manu_facts CHANGE facebook facebook VARCHAR(180) DEFAULT NULL, CHANGE twitter twitter VARCHAR(180) DEFAULT NULL, CHANGE contact_name contact_name VARCHAR(180) DEFAULT NULL, CHANGE lat lat VARCHAR(100) DEFAULT NULL, CHANGE lng lng VARCHAR(100) DEFAULT NULL, CHANGE icon icon VARCHAR(180) DEFAULT NULL, CHANGE phone phone VARCHAR(180) DEFAULT NULL');
        $this->addSql('ALTER TABLE loves CHANGE product_id product_id INT DEFAULT NULL, CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE carts CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE departments CHANGE parent_id parent_id INT DEFAULT NULL, CHANGE icon icon VARCHAR(180) DEFAULT NULL, CHANGE description description VARCHAR(180) DEFAULT NULL, CHANGE keyword keyword VARCHAR(180) DEFAULT NULL');
        $this->addSql('ALTER TABLE settings CHANGE var var VARCHAR(180) DEFAULT NULL, CHANGE display_name display_name VARCHAR(180) DEFAULT NULL');
        $this->addSql('ALTER TABLE products CHANGE department_id department_id INT DEFAULT NULL, CHANGE trademark_id trademark_id INT DEFAULT NULL, CHANGE weight_id weight_id INT DEFAULT NULL, CHANGE photo photo VARCHAR(180) DEFAULT NULL, CHANGE price price NUMERIC(5, 2) DEFAULT NULL, CHANGE stock stock INT DEFAULT NULL, CHANGE start_at start_at DATETIME DEFAULT NULL, CHANGE end_at end_at DATETIME DEFAULT NULL, CHANGE start_offer_at start_offer_at DATETIME DEFAULT NULL, CHANGE end_offer_at end_offer_at DATETIME DEFAULT NULL, CHANGE price_offer price_offer NUMERIC(5, 2) DEFAULT NULL, CHANGE weight_string weight_string VARCHAR(180) DEFAULT NULL, CHANGE status status VARCHAR(100) DEFAULT NULL, CHANGE size_string size_string VARCHAR(180) DEFAULT NULL');
        $this->addSql('ALTER TABLE states CHANGE city_id city_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE orders CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE shippings CHANGE icon icon VARCHAR(180) DEFAULT NULL, CHANGE address address VARCHAR(180) DEFAULT NULL, CHANGE lng lng VARCHAR(180) DEFAULT NULL, CHANGE lat lat VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE admins CHANGE roles roles JSON NOT NULL');
        $this->addSql('ALTER TABLE countries CHANGE code code VARCHAR(180) DEFAULT NULL, CHANGE logo logo VARCHAR(180) DEFAULT NULL');
        $this->addSql('ALTER TABLE users CHANGE roles roles JSON NOT NULL, CHANGE phone phone VARCHAR(180) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE admins CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE carts CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE countries CHANGE code code VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE logo logo VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE departments CHANGE parent_id parent_id INT DEFAULT NULL, CHANGE icon icon VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE description description VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE keyword keyword VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE loves CHANGE product_id product_id INT DEFAULT NULL, CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE manu_facts CHANGE facebook facebook VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE twitter twitter VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE contact_name contact_name VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE lat lat VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE lng lng VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE icon icon VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE phone phone VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE orders CHANGE user_id user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE products CHANGE department_id department_id INT DEFAULT NULL, CHANGE trademark_id trademark_id INT DEFAULT NULL, CHANGE weight_id weight_id INT DEFAULT NULL, CHANGE photo photo VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE price price NUMERIC(5, 2) DEFAULT \'NULL\', CHANGE stock stock INT DEFAULT NULL, CHANGE start_at start_at DATETIME DEFAULT \'NULL\', CHANGE end_at end_at DATETIME DEFAULT \'NULL\', CHANGE start_offer_at start_offer_at DATETIME DEFAULT \'NULL\', CHANGE end_offer_at end_offer_at DATETIME DEFAULT \'NULL\', CHANGE price_offer price_offer NUMERIC(5, 2) DEFAULT \'NULL\', CHANGE weight_string weight_string VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE status status VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE size_string size_string VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE settings CHANGE var var VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE display_name display_name VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE shippings CHANGE icon icon VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE address address VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE lng lng VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE lat lat VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE states CHANGE city_id city_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE trademarks CHANGE icon icon VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE users CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_bin`, CHANGE phone phone VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
    }
}

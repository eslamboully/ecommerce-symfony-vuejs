<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200619130646 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE cities (id INT AUTO_INCREMENT NOT NULL, country_id INT NOT NULL, name VARCHAR(180) NOT NULL, INDEX IDX_D95DB16BF92F3E70 (country_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE trademarks (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(180) NOT NULL, icon VARCHAR(180) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE manu_facts (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(180) NOT NULL, facebook VARCHAR(180) DEFAULT NULL, twitter VARCHAR(180) DEFAULT NULL, contact_name VARCHAR(180) DEFAULT NULL, lat VARCHAR(100) DEFAULT NULL, lng VARCHAR(100) DEFAULT NULL, icon VARCHAR(180) DEFAULT NULL, email VARCHAR(180) NOT NULL, phone VARCHAR(180) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE loves (id INT AUTO_INCREMENT NOT NULL, product_id INT DEFAULT NULL, user_id INT DEFAULT NULL, love TINYINT(1) NOT NULL, INDEX IDX_785F21824584665A (product_id), INDEX IDX_785F2182A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE carts (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_4E004AACA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE cart_product (cart_id INT NOT NULL, product_id INT NOT NULL, INDEX IDX_2890CCAA1AD5CDBF (cart_id), INDEX IDX_2890CCAA4584665A (product_id), PRIMARY KEY(cart_id, product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE departments (id INT AUTO_INCREMENT NOT NULL, parent_id INT DEFAULT NULL, name VARCHAR(180) NOT NULL, icon VARCHAR(180) DEFAULT NULL, description VARCHAR(180) DEFAULT NULL, keyword VARCHAR(180) DEFAULT NULL, INDEX IDX_16AEB8D4727ACA70 (parent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE settings (id INT AUTO_INCREMENT NOT NULL, var VARCHAR(180) DEFAULT NULL, display_name VARCHAR(180) DEFAULT NULL, type SMALLINT NOT NULL, value LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE products (id INT AUTO_INCREMENT NOT NULL, department_id INT DEFAULT NULL, trademark_id INT DEFAULT NULL, weight_id INT DEFAULT NULL, title VARCHAR(180) NOT NULL, photo VARCHAR(180) DEFAULT NULL, content LONGTEXT DEFAULT NULL, price NUMERIC(5, 2) DEFAULT NULL, stock INT DEFAULT NULL, start_at DATETIME DEFAULT NULL, end_at DATETIME DEFAULT NULL, start_offer_at DATETIME DEFAULT NULL, end_offer_at DATETIME DEFAULT NULL, price_offer NUMERIC(5, 2) DEFAULT NULL, other_data LONGTEXT DEFAULT NULL, weight_string VARCHAR(180) DEFAULT NULL, status VARCHAR(100) DEFAULT NULL, reason LONGTEXT DEFAULT NULL, size_string VARCHAR(180) DEFAULT NULL, INDEX IDX_B3BA5A5AAE80F5DF (department_id), INDEX IDX_B3BA5A5A828AA8BA (trademark_id), INDEX IDX_B3BA5A5A350035DC (weight_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_color (product_id INT NOT NULL, color_id INT NOT NULL, INDEX IDX_C70A33B54584665A (product_id), INDEX IDX_C70A33B57ADA1FB5 (color_id), PRIMARY KEY(product_id, color_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_country (product_id INT NOT NULL, country_id INT NOT NULL, INDEX IDX_82AAD2D64584665A (product_id), INDEX IDX_82AAD2D6F92F3E70 (country_id), PRIMARY KEY(product_id, country_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_size (product_id INT NOT NULL, size_id INT NOT NULL, INDEX IDX_7A2806CB4584665A (product_id), INDEX IDX_7A2806CB498DA827 (size_id), PRIMARY KEY(product_id, size_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_manu_fact (product_id INT NOT NULL, manu_fact_id INT NOT NULL, INDEX IDX_4D0113AC4584665A (product_id), INDEX IDX_4D0113AC2D6F3216 (manu_fact_id), PRIMARY KEY(product_id, manu_fact_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE states (id INT AUTO_INCREMENT NOT NULL, country_id INT NOT NULL, city_id INT DEFAULT NULL, name VARCHAR(180) NOT NULL, INDEX IDX_31C2774DF92F3E70 (country_id), INDEX IDX_31C2774D8BAC62AF (city_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE orders (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, total_price INT NOT NULL, status INT NOT NULL, details LONGTEXT DEFAULT NULL, INDEX IDX_E52FFDEEA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_product (order_id INT NOT NULL, product_id INT NOT NULL, INDEX IDX_2530ADE68D9F6D38 (order_id), INDEX IDX_2530ADE64584665A (product_id), PRIMARY KEY(order_id, product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE weights (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(180) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sizes (id INT AUTO_INCREMENT NOT NULL, department_id INT NOT NULL, name VARCHAR(180) NOT NULL, is_public TINYINT(1) NOT NULL, INDEX IDX_B69E8769AE80F5DF (department_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE shippings (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, name VARCHAR(180) NOT NULL, icon VARCHAR(180) DEFAULT NULL, address VARCHAR(180) DEFAULT NULL, lng VARCHAR(180) DEFAULT NULL, lat VARCHAR(100) DEFAULT NULL, INDEX IDX_272037CDA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE admins (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(180) NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_A2E0150FE7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE malls (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(180) NOT NULL, owner VARCHAR(180) NOT NULL, email VARCHAR(180) NOT NULL, phone VARCHAR(180) NOT NULL, address VARCHAR(180) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE colors (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(180) NOT NULL, color VARCHAR(180) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE countries (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(180) NOT NULL, mob VARCHAR(180) NOT NULL, code VARCHAR(180) DEFAULT NULL, logo VARCHAR(180) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, name VARCHAR(180) NOT NULL, type SMALLINT NOT NULL, phone VARCHAR(180) DEFAULT NULL, UNIQUE INDEX UNIQ_1483A5E9E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE cities ADD CONSTRAINT FK_D95DB16BF92F3E70 FOREIGN KEY (country_id) REFERENCES countries (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE loves ADD CONSTRAINT FK_785F21824584665A FOREIGN KEY (product_id) REFERENCES products (id)');
        $this->addSql('ALTER TABLE loves ADD CONSTRAINT FK_785F2182A76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE carts ADD CONSTRAINT FK_4E004AACA76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE cart_product ADD CONSTRAINT FK_2890CCAA1AD5CDBF FOREIGN KEY (cart_id) REFERENCES carts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE cart_product ADD CONSTRAINT FK_2890CCAA4584665A FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE departments ADD CONSTRAINT FK_16AEB8D4727ACA70 FOREIGN KEY (parent_id) REFERENCES departments (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5AAE80F5DF FOREIGN KEY (department_id) REFERENCES departments (id)');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5A828AA8BA FOREIGN KEY (trademark_id) REFERENCES trademarks (id)');
        $this->addSql('ALTER TABLE products ADD CONSTRAINT FK_B3BA5A5A350035DC FOREIGN KEY (weight_id) REFERENCES weights (id)');
        $this->addSql('ALTER TABLE product_color ADD CONSTRAINT FK_C70A33B54584665A FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_color ADD CONSTRAINT FK_C70A33B57ADA1FB5 FOREIGN KEY (color_id) REFERENCES colors (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_country ADD CONSTRAINT FK_82AAD2D64584665A FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_country ADD CONSTRAINT FK_82AAD2D6F92F3E70 FOREIGN KEY (country_id) REFERENCES countries (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_size ADD CONSTRAINT FK_7A2806CB4584665A FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_size ADD CONSTRAINT FK_7A2806CB498DA827 FOREIGN KEY (size_id) REFERENCES sizes (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_manu_fact ADD CONSTRAINT FK_4D0113AC4584665A FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_manu_fact ADD CONSTRAINT FK_4D0113AC2D6F3216 FOREIGN KEY (manu_fact_id) REFERENCES manu_facts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE states ADD CONSTRAINT FK_31C2774DF92F3E70 FOREIGN KEY (country_id) REFERENCES countries (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE states ADD CONSTRAINT FK_31C2774D8BAC62AF FOREIGN KEY (city_id) REFERENCES cities (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE orders ADD CONSTRAINT FK_E52FFDEEA76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE order_product ADD CONSTRAINT FK_2530ADE68D9F6D38 FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE order_product ADD CONSTRAINT FK_2530ADE64584665A FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE sizes ADD CONSTRAINT FK_B69E8769AE80F5DF FOREIGN KEY (department_id) REFERENCES departments (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE shippings ADD CONSTRAINT FK_272037CDA76ED395 FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE states DROP FOREIGN KEY FK_31C2774D8BAC62AF');
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5A828AA8BA');
        $this->addSql('ALTER TABLE product_manu_fact DROP FOREIGN KEY FK_4D0113AC2D6F3216');
        $this->addSql('ALTER TABLE cart_product DROP FOREIGN KEY FK_2890CCAA1AD5CDBF');
        $this->addSql('ALTER TABLE departments DROP FOREIGN KEY FK_16AEB8D4727ACA70');
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5AAE80F5DF');
        $this->addSql('ALTER TABLE sizes DROP FOREIGN KEY FK_B69E8769AE80F5DF');
        $this->addSql('ALTER TABLE loves DROP FOREIGN KEY FK_785F21824584665A');
        $this->addSql('ALTER TABLE cart_product DROP FOREIGN KEY FK_2890CCAA4584665A');
        $this->addSql('ALTER TABLE product_color DROP FOREIGN KEY FK_C70A33B54584665A');
        $this->addSql('ALTER TABLE product_country DROP FOREIGN KEY FK_82AAD2D64584665A');
        $this->addSql('ALTER TABLE product_size DROP FOREIGN KEY FK_7A2806CB4584665A');
        $this->addSql('ALTER TABLE product_manu_fact DROP FOREIGN KEY FK_4D0113AC4584665A');
        $this->addSql('ALTER TABLE order_product DROP FOREIGN KEY FK_2530ADE64584665A');
        $this->addSql('ALTER TABLE order_product DROP FOREIGN KEY FK_2530ADE68D9F6D38');
        $this->addSql('ALTER TABLE products DROP FOREIGN KEY FK_B3BA5A5A350035DC');
        $this->addSql('ALTER TABLE product_size DROP FOREIGN KEY FK_7A2806CB498DA827');
        $this->addSql('ALTER TABLE product_color DROP FOREIGN KEY FK_C70A33B57ADA1FB5');
        $this->addSql('ALTER TABLE cities DROP FOREIGN KEY FK_D95DB16BF92F3E70');
        $this->addSql('ALTER TABLE product_country DROP FOREIGN KEY FK_82AAD2D6F92F3E70');
        $this->addSql('ALTER TABLE states DROP FOREIGN KEY FK_31C2774DF92F3E70');
        $this->addSql('ALTER TABLE loves DROP FOREIGN KEY FK_785F2182A76ED395');
        $this->addSql('ALTER TABLE carts DROP FOREIGN KEY FK_4E004AACA76ED395');
        $this->addSql('ALTER TABLE orders DROP FOREIGN KEY FK_E52FFDEEA76ED395');
        $this->addSql('ALTER TABLE shippings DROP FOREIGN KEY FK_272037CDA76ED395');
        $this->addSql('DROP TABLE cities');
        $this->addSql('DROP TABLE trademarks');
        $this->addSql('DROP TABLE manu_facts');
        $this->addSql('DROP TABLE loves');
        $this->addSql('DROP TABLE carts');
        $this->addSql('DROP TABLE cart_product');
        $this->addSql('DROP TABLE departments');
        $this->addSql('DROP TABLE settings');
        $this->addSql('DROP TABLE products');
        $this->addSql('DROP TABLE product_color');
        $this->addSql('DROP TABLE product_country');
        $this->addSql('DROP TABLE product_size');
        $this->addSql('DROP TABLE product_manu_fact');
        $this->addSql('DROP TABLE states');
        $this->addSql('DROP TABLE orders');
        $this->addSql('DROP TABLE order_product');
        $this->addSql('DROP TABLE weights');
        $this->addSql('DROP TABLE sizes');
        $this->addSql('DROP TABLE shippings');
        $this->addSql('DROP TABLE admins');
        $this->addSql('DROP TABLE malls');
        $this->addSql('DROP TABLE colors');
        $this->addSql('DROP TABLE countries');
        $this->addSql('DROP TABLE users');
    }
}

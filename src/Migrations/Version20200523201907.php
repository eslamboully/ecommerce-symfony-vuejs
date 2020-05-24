<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200523201907 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE product_color (product_id INT NOT NULL, color_id INT NOT NULL, INDEX IDX_C70A33B54584665A (product_id), INDEX IDX_C70A33B57ADA1FB5 (color_id), PRIMARY KEY(product_id, color_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_country (product_id INT NOT NULL, country_id INT NOT NULL, INDEX IDX_82AAD2D64584665A (product_id), INDEX IDX_82AAD2D6F92F3E70 (country_id), PRIMARY KEY(product_id, country_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_size (product_id INT NOT NULL, size_id INT NOT NULL, INDEX IDX_7A2806CB4584665A (product_id), INDEX IDX_7A2806CB498DA827 (size_id), PRIMARY KEY(product_id, size_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_manu_fact (product_id INT NOT NULL, manu_fact_id INT NOT NULL, INDEX IDX_4D0113AC4584665A (product_id), INDEX IDX_4D0113AC2D6F3216 (manu_fact_id), PRIMARY KEY(product_id, manu_fact_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE product_color ADD CONSTRAINT FK_C70A33B54584665A FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_color ADD CONSTRAINT FK_C70A33B57ADA1FB5 FOREIGN KEY (color_id) REFERENCES colors (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_country ADD CONSTRAINT FK_82AAD2D64584665A FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_country ADD CONSTRAINT FK_82AAD2D6F92F3E70 FOREIGN KEY (country_id) REFERENCES countries (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_size ADD CONSTRAINT FK_7A2806CB4584665A FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_size ADD CONSTRAINT FK_7A2806CB498DA827 FOREIGN KEY (size_id) REFERENCES sizes (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_manu_fact ADD CONSTRAINT FK_4D0113AC4584665A FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_manu_fact ADD CONSTRAINT FK_4D0113AC2D6F3216 FOREIGN KEY (manu_fact_id) REFERENCES manu_facts (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE admins CHANGE roles roles JSON NOT NULL');
        $this->addSql('ALTER TABLE colors DROP FOREIGN KEY FK_C2BEC39F4584665A');
        $this->addSql('DROP INDEX IDX_C2BEC39F4584665A ON colors');
        $this->addSql('ALTER TABLE colors DROP product_id');
        $this->addSql('ALTER TABLE countries DROP FOREIGN KEY FK_5D66EBAD4584665A');
        $this->addSql('DROP INDEX IDX_5D66EBAD4584665A ON countries');
        $this->addSql('ALTER TABLE countries DROP product_id, CHANGE code code VARCHAR(180) DEFAULT NULL, CHANGE logo logo VARCHAR(180) DEFAULT NULL');
        $this->addSql('ALTER TABLE departments CHANGE parent_id parent_id INT DEFAULT NULL, CHANGE icon icon VARCHAR(180) DEFAULT NULL, CHANGE description description VARCHAR(180) DEFAULT NULL, CHANGE keyword keyword VARCHAR(180) DEFAULT NULL');
        $this->addSql('ALTER TABLE manu_facts DROP FOREIGN KEY FK_57447EF04584665A');
        $this->addSql('DROP INDEX IDX_57447EF04584665A ON manu_facts');
        $this->addSql('ALTER TABLE manu_facts DROP product_id, CHANGE facebook facebook VARCHAR(180) DEFAULT NULL, CHANGE twitter twitter VARCHAR(180) DEFAULT NULL, CHANGE contact_name contact_name VARCHAR(180) DEFAULT NULL, CHANGE lat lat VARCHAR(100) DEFAULT NULL, CHANGE lng lng VARCHAR(100) DEFAULT NULL, CHANGE icon icon VARCHAR(180) DEFAULT NULL, CHANGE phone phone VARCHAR(180) DEFAULT NULL');
        $this->addSql('ALTER TABLE products CHANGE department_id department_id INT DEFAULT NULL, CHANGE trademark_id trademark_id INT DEFAULT NULL, CHANGE stock stock INT DEFAULT NULL, CHANGE start_at start_at DATETIME DEFAULT NULL, CHANGE end_at end_at DATETIME DEFAULT NULL, CHANGE start_offer_at start_offer_at DATETIME DEFAULT NULL, CHANGE end_offer_at end_offer_at DATETIME DEFAULT NULL, CHANGE price_offer price_offer NUMERIC(5, 2) DEFAULT NULL');
        $this->addSql('ALTER TABLE shippings CHANGE icon icon VARCHAR(180) DEFAULT NULL, CHANGE address address VARCHAR(180) DEFAULT NULL, CHANGE lng lng VARCHAR(180) DEFAULT NULL, CHANGE lat lat VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE sizes DROP FOREIGN KEY FK_B69E87694584665A');
        $this->addSql('DROP INDEX IDX_B69E87694584665A ON sizes');
        $this->addSql('ALTER TABLE sizes DROP product_id');
        $this->addSql('ALTER TABLE states CHANGE city_id city_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE trademarks CHANGE icon icon VARCHAR(180) DEFAULT NULL');
        $this->addSql('ALTER TABLE users CHANGE roles roles JSON NOT NULL');
        $this->addSql('ALTER TABLE weights DROP FOREIGN KEY FK_1AD273584584665A');
        $this->addSql('DROP INDEX IDX_1AD273584584665A ON weights');
        $this->addSql('ALTER TABLE weights DROP product_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE product_color');
        $this->addSql('DROP TABLE product_country');
        $this->addSql('DROP TABLE product_size');
        $this->addSql('DROP TABLE product_manu_fact');
        $this->addSql('ALTER TABLE admins CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE colors ADD product_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE colors ADD CONSTRAINT FK_C2BEC39F4584665A FOREIGN KEY (product_id) REFERENCES products (id)');
        $this->addSql('CREATE INDEX IDX_C2BEC39F4584665A ON colors (product_id)');
        $this->addSql('ALTER TABLE countries ADD product_id INT DEFAULT NULL, CHANGE code code VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE logo logo VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE countries ADD CONSTRAINT FK_5D66EBAD4584665A FOREIGN KEY (product_id) REFERENCES products (id)');
        $this->addSql('CREATE INDEX IDX_5D66EBAD4584665A ON countries (product_id)');
        $this->addSql('ALTER TABLE departments CHANGE parent_id parent_id INT DEFAULT NULL, CHANGE icon icon VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE description description VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE keyword keyword VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE manu_facts ADD product_id INT DEFAULT NULL, CHANGE facebook facebook VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE twitter twitter VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE contact_name contact_name VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE lat lat VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE lng lng VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE icon icon VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE phone phone VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE manu_facts ADD CONSTRAINT FK_57447EF04584665A FOREIGN KEY (product_id) REFERENCES products (id)');
        $this->addSql('CREATE INDEX IDX_57447EF04584665A ON manu_facts (product_id)');
        $this->addSql('ALTER TABLE products CHANGE department_id department_id INT DEFAULT NULL, CHANGE trademark_id trademark_id INT DEFAULT NULL, CHANGE stock stock INT DEFAULT NULL, CHANGE start_at start_at DATETIME DEFAULT \'NULL\', CHANGE end_at end_at DATETIME DEFAULT \'NULL\', CHANGE start_offer_at start_offer_at DATETIME DEFAULT \'NULL\', CHANGE end_offer_at end_offer_at DATETIME DEFAULT \'NULL\', CHANGE price_offer price_offer NUMERIC(5, 2) DEFAULT \'NULL\'');
        $this->addSql('ALTER TABLE shippings CHANGE icon icon VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE address address VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE lng lng VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`, CHANGE lat lat VARCHAR(100) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE sizes ADD product_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE sizes ADD CONSTRAINT FK_B69E87694584665A FOREIGN KEY (product_id) REFERENCES products (id)');
        $this->addSql('CREATE INDEX IDX_B69E87694584665A ON sizes (product_id)');
        $this->addSql('ALTER TABLE states CHANGE city_id city_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE trademarks CHANGE icon icon VARCHAR(180) CHARACTER SET utf8mb4 DEFAULT \'NULL\' COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE users CHANGE roles roles LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE weights ADD product_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE weights ADD CONSTRAINT FK_1AD273584584665A FOREIGN KEY (product_id) REFERENCES products (id)');
        $this->addSql('CREATE INDEX IDX_1AD273584584665A ON weights (product_id)');
    }
}

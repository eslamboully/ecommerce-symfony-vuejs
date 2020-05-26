<?php

namespace App\DataFixtures;

use App\Entity\Setting;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SettingFixTures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // Site Name
         $sitename = new Setting();
         $sitename->setVar('site_name');
         $sitename->setDisplayName('اسم الموقع');
         $sitename->setType(1);
         $sitename->setValue('اسم الموقع');
         $manager->persist($sitename);

        // Site Description
        $sitedescription = new Setting();
        $sitedescription->setVar('site_description');
        $sitedescription->setDisplayName('وصف الموقع');
        $sitedescription->setType(2);
        $sitedescription->setValue('وصف الموقع');
        $manager->persist($sitedescription);

        // Site logo
        $sitelogo = new Setting();
        $sitelogo->setVar('site_logo');
        $sitelogo->setDisplayName('شعار الموقع');
        $sitelogo->setType(3);
        $sitelogo->setValue('default.jpg');

        $manager->persist($sitelogo);

        $manager->flush();
    }
}

<?php
namespace App\Service;

use App\Entity\Department;
use Doctrine\ORM\EntityManagerInterface;

class HelperService{


    public function __construct()
    {

    }

    public function departments_tree(EntityManagerInterface $entityManager)
    {
        $departments = $entityManager->getRepository(Department::class)->findAll();
        $finalArr = [];
        foreach ($departments as $index=>$department)
        {
            array_push(
                $finalArr,
                ["id" => $department->getId(), "parent" => $department->getParent() ? $department->getParent()->getId() : "#", "text" => $department->getName()]
            );
        }
        return json_encode($finalArr,JSON_PRETTY_PRINT);
    }
}

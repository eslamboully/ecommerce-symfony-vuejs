<?php

namespace App\Repository;

use App\Entity\Department;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Department|null find($id, $lockMode = null, $lockVersion = null)
 * @method Department|null findOneBy(array $criteria, array $orderBy = null)
 * @method Department[]    findAll()
 * @method Department[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DepartmentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Department::class);
    }

    // /**
    //  * @return Department[] Returns an array of Department objects
    //  */


    public function getCategory($id)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.id = :id')
            ->orderBy('d.id', 'DESC')
            ->setParameter('id',$id)
            ->getQuery()
            ->getArrayResult();
        ;
    }

    public function getCategories($parent)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.parent = :parent')
            ->orderBy('d.id', 'ASC')
            ->setParameter('parent',$parent)
            ->getQuery()
            ->getArrayResult();
        ;
    }



    /*
    public function findOneBySomeField($value): ?Department
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

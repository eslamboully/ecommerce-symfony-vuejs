<?php

namespace App\Repository;

use App\Entity\Mall;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Mall|null find($id, $lockMode = null, $lockVersion = null)
 * @method Mall|null findOneBy(array $criteria, array $orderBy = null)
 * @method Mall[]    findAll()
 * @method Mall[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MallRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Mall::class);
    }

    // /**
    //  * @return Mall[] Returns an array of Mall objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Mall
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

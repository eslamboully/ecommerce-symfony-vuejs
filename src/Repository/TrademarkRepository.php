<?php

namespace App\Repository;

use App\Entity\Trademark;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Trademark|null find($id, $lockMode = null, $lockVersion = null)
 * @method Trademark|null findOneBy(array $criteria, array $orderBy = null)
 * @method Trademark[]    findAll()
 * @method Trademark[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrademarkRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Trademark::class);
    }

    // /**
    //  * @return Trademark[] Returns an array of Trademark objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Trademark
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

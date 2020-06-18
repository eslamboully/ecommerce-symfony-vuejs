<?php

namespace App\Repository;

use App\Entity\Color;
use App\Entity\Product;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Product|null find($id, $lockMode = null, $lockVersion = null)
 * @method Product|null findOneBy(array $criteria, array $orderBy = null)
 * @method Product[]    findAll()
 * @method Product[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Product::class);
    }

    // /**
    //  * @return Product[] Returns an array of Product objects
    //  */

//    public function getTestProducts()
//    {
//        return $this->createQueryBuilder('p')
//            ->leftJoin('p.Color','c')
//            ->select('p','c')
//            ->orderBy('p.id','DESC')
//            ->getQuery()->getArrayResult()
//        ;
//    }

    public function getLatestProduct()
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.id', 'DESC')
            ->andWhere('p.start_at <= :date')
            ->andWhere('p.end_at >= :date')
            ->andWhere('p.status = 1')
            ->andWhere('p.stock > 0')
            ->setParameter('date',date("Y-m-d", time()))
            ->setMaxResults(6)
            ->getQuery()
            ->getArrayResult()
        ;
    }

    public function getProducts()
    {
        return $this->createQueryBuilder('p')
            ->leftJoin('p.Color','c')
            ->select('p','c')
            ->orderBy('p.id', 'DESC')
            ->andWhere('p.start_at <= :date')
            ->andWhere('p.end_at >= :date')
            ->andWhere('p.status = 1')
            ->andWhere('p.stock > 0')
            ->setParameter('date',date("Y-m-d", time()))
            ->setMaxResults(8)
            ->getQuery()
            ->getArrayResult()
        ;
    }

    public function getMoreProducts($skipNumber)
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.id', 'DESC')
            ->andWhere('p.start_at <= :date')
            ->andWhere('p.end_at >= :date')
            ->andWhere('p.status = 1')
            ->andWhere('p.stock > 0')
            ->setParameter('date',date("Y-m-d", time()))
            ->setMaxResults(8)
            ->setFirstResult($skipNumber)
            ->getQuery()
            ->getArrayResult()
        ;
    }

    public function getProduct($id)
    {
        return $this->createQueryBuilder('p')
            ->leftJoin('p.Color','c')
            ->leftJoin('p.Department','d')
            ->leftJoin('p.Size','s')
            ->select('p','c','d','s')
            ->andWhere('p.start_at <= :date')
            ->andWhere('p.end_at >= :date')
            ->andWhere('p.status = 1')
            ->andWhere('p.stock > 0')
            ->andWhere('p.id = :id')
            ->setParameter('date',date("Y-m-d", time()))
            ->setParameter('id',$id)
            ->getQuery()
            ->getArrayResult()
        ;
    }


    public function getRelatedProduct($departmentId)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.Department = :id')
            ->andWhere('p.start_at <= :date')
            ->andWhere('p.end_at >= :date')
            ->andWhere('p.status = 1')
            ->andWhere('p.stock > 0')
            ->setParameter('date',date("Y-m-d", time()))
            ->setParameter('id',$departmentId)
            ->setMaxResults(10)
            ->getQuery()
            ->getArrayResult()
        ;
    }


    public function getArrByCategoryId($id)
    {
        return $this->createQueryBuilder('p')
            ->leftJoin('p.Color','c')
            ->select('p','c')
            ->orderBy('p.id', 'DESC')
            ->andWhere('p.Department = :department')
            ->andWhere('p.start_at <= :date')
            ->andWhere('p.end_at >= :date')
            ->andWhere('p.status = 1')
            ->andWhere('p.stock > 0')
            ->setParameter('date',date("Y-m-d", time()))
            ->setParameter('department',$id)
            ->setMaxResults(12)
            ->getQuery()
            ->getArrayResult()
        ;
    }

    public function getMoreSpecificProducts($department,$skipNumber)
    {
        return $this->createQueryBuilder('p')
            ->orderBy('p.id', 'DESC')
            ->andWhere('p.Department = :department')
            ->andWhere('p.start_at <= :date')
            ->andWhere('p.end_at >= :date')
            ->andWhere('p.status = 1')
            ->andWhere('p.stock > 0')
            ->setParameter('date',date("Y-m-d", time()))
            ->setParameter('department',$department)
            ->setMaxResults(6)
            ->setFirstResult($skipNumber+1)
            ->getQuery()
            ->getArrayResult()
            ;
    }


    /*
    public function findOneBySomeField($value): ?Product
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

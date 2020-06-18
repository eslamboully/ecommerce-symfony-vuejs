<?php

namespace App\Entity;

use App\Repository\LoveRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LoveRepository::class)
 * @ORM\Table(name="loves")
 */
class Love
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="boolean")
     */
    private $love;

    /**
     * @ORM\ManyToOne(targetEntity=Product::class, inversedBy="love")
     */
    private $Product;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="loves")
     */
    private $User;

    public function __construct()
    {
        $this->User = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLove(): ?bool
    {
        return $this->love;
    }

    public function setLove(bool $love): self
    {
        $this->love = $love;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->Product;
    }

    public function setProduct(?Product $Product): self
    {
        $this->Product = $Product;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->User;
    }

    public function setUser(?User $User): self
    {
        $this->User = $User;

        return $this;
    }
}

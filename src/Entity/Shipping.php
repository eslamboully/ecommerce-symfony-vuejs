<?php

namespace App\Entity;

use App\Repository\ShippingRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ShippingRepository::class)
 * @ORM\Table(name="shippings")
 */
class Shipping
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=180, nullable=true)
     */
    private $icon;

    /**
     * @ORM\Column(type="string", length=180, nullable=true)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=180, nullable=true)
     */
    private $lng;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $lat;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="shippings")
     * @ORM\JoinColumn(nullable=false,onDelete="CASCADE")
     */
    private $User;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }


    public function getIcon(): ?string
    {
        if ($this->icon)
        {
            return '/uploads/shippings/'.$this->icon;
        }
        return '/uploads/shippings/default.jpg';
    }

    public function setIcon(?string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getLng(): ?string
    {
        return $this->lng;
    }

    public function setLng(?string $lng): self
    {
        $this->lng = $lng;

        return $this;
    }

    public function getLat(): ?string
    {
        return $this->lat;
    }

    public function setLat(?string $lat): self
    {
        $this->lat = $lat;

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

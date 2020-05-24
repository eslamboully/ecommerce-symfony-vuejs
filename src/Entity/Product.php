<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProductRepository::class)
 * @ORM\Table(name="products")
 */
class Product
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
    private $title;

    /**
     * @ORM\Column(type="string", length=180)
     */
    private $photo;

    /**
     * @ORM\Column(type="text")
     */
    private $content;

    /**
     * @ORM\ManyToOne(targetEntity=Department::class, inversedBy="products")
     */
    private $Department;

    /**
     * @ORM\ManyToOne(targetEntity=Trademark::class, inversedBy="products")
     */
    private $Trademark;

    /**
     * @ORM\Column(type="decimal", precision=5, scale=2)
     */
    private $price;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $stock;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $start_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $end_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $start_offer_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $end_offer_at;

    /**
     * @ORM\Column(type="decimal", precision=5, scale=2, nullable=true)
     */
    private $price_offer;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $other_data;

    /**
     * @ORM\Column(type="string", length=180)
     */
    private $weight_string;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $status;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $reason;

    /**
     * @ORM\ManyToMany(targetEntity=Color::class, inversedBy="products")
     */
    private $Color;

    /**
     * @ORM\ManyToMany(targetEntity=Country::class, inversedBy="products")
     */
    private $Country;

    /**
     * @ORM\ManyToMany(targetEntity=Size::class, inversedBy="products")
     */
    private $Size;

    /**
     * @ORM\ManyToMany(targetEntity=ManuFact::class, inversedBy="products")
     */
    private $ManuFact;

    /**
     * @ORM\ManyToOne(targetEntity=Weight::class, inversedBy="products")
     */
    private $Weight;

    public function __construct()
    {
        $this->Color = new ArrayCollection();
        $this->Country = new ArrayCollection();
        $this->Size = new ArrayCollection();
        $this->ManuFact = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getDepartment(): ?Department
    {
        return $this->Department;
    }

    public function setDepartment(?Department $Department): self
    {
        $this->Department = $Department;

        return $this;
    }

    public function getTrademark(): ?Trademark
    {
        return $this->Trademark;
    }

    public function setTrademark(?Trademark $Trademark): self
    {
        $this->Trademark = $Trademark;

        return $this;
    }


    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(?int $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    public function getStartAt(): ?\DateTimeInterface
    {
        return $this->start_at;
    }

    public function setStartAt(?\DateTimeInterface $start_at): self
    {
        $this->start_at = $start_at;

        return $this;
    }

    public function getEndAt(): ?\DateTimeInterface
    {
        return $this->end_at;
    }

    public function setEndAt(?\DateTimeInterface $end_at): self
    {
        $this->end_at = $end_at;

        return $this;
    }

    public function getStartOfferAt(): ?\DateTimeInterface
    {
        return $this->start_offer_at;
    }

    public function setStartOfferAt(?\DateTimeInterface $start_offer_at): self
    {
        $this->start_offer_at = $start_offer_at;

        return $this;
    }

    public function getEndOfferAt(): ?\DateTimeInterface
    {
        return $this->end_offer_at;
    }

    public function setEndOfferAt(?\DateTimeInterface $end_offer_at): self
    {
        $this->end_offer_at = $end_offer_at;

        return $this;
    }

    public function getPriceOffer(): ?string
    {
        return $this->price_offer;
    }

    public function setPriceOffer(?string $price_offer): self
    {
        $this->price_offer = $price_offer;

        return $this;
    }

    public function getOtherData(): ?string
    {
        return $this->other_data;
    }

    public function setOtherData(?string $other_data): self
    {
        $this->other_data = $other_data;

        return $this;
    }

    public function getWeightString(): ?string
    {
        return $this->weight_string;
    }

    public function setWeightString(?string $weight_string): self
    {
        $this->weight_string = $weight_string;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getReason(): ?string
    {
        return $this->reason;
    }

    public function setReason(?string $reason): self
    {
        $this->reason = $reason;

        return $this;
    }

    /**
     * @return Collection|Color[]
     */
    public function getColor(): Collection
    {
        return $this->Color;
    }

    public function addColor(Color $color): self
    {
        if (!$this->Color->contains($color)) {
            $this->Color[] = $color;
        }

        return $this;
    }

    public function removeColor(Color $color): self
    {
        if ($this->Color->contains($color)) {
            $this->Color->removeElement($color);
        }

        return $this;
    }

    /**
     * @return Collection|Country[]
     */
    public function getCountry(): Collection
    {
        return $this->Country;
    }

    public function addCountry(Country $country): self
    {
        if (!$this->Country->contains($country)) {
            $this->Country[] = $country;
        }

        return $this;
    }

    public function removeCountry(Country $country): self
    {
        if ($this->Country->contains($country)) {
            $this->Country->removeElement($country);
        }

        return $this;
    }

    /**
     * @return Collection|Size[]
     */
    public function getSize(): Collection
    {
        return $this->Size;
    }

    public function addSize(Size $size): self
    {
        if (!$this->Size->contains($size)) {
            $this->Size[] = $size;
        }

        return $this;
    }

    public function removeSize(Size $size): self
    {
        if ($this->Size->contains($size)) {
            $this->Size->removeElement($size);
        }

        return $this;
    }

    /**
     * @return Collection|ManuFact[]
     */
    public function getManuFact(): Collection
    {
        return $this->ManuFact;
    }

    public function addManuFact(ManuFact $manuFact): self
    {
        if (!$this->ManuFact->contains($manuFact)) {
            $this->ManuFact[] = $manuFact;
        }

        return $this;
    }

    public function removeManuFact(ManuFact $manuFact): self
    {
        if ($this->ManuFact->contains($manuFact)) {
            $this->ManuFact->removeElement($manuFact);
        }

        return $this;
    }

    public function getWeight(): ?Weight
    {
        return $this->Weight;
    }

    public function setWeight(?Weight $Weight): self
    {
        $this->Weight = $Weight;

        return $this;
    }
}

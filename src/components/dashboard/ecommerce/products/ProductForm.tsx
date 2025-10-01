"use client";
import DragAndDropFiles from "@/components/common/DragAndDropFiles";
import InputBox from "@/components/common/InputBox";
import MultiStepper from "@/components/common/MultiStepper";
import SelectBox from "@/components/common/SelectBox";
import TextBox from "@/components/common/TextBox";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { resetStep } from "@/redux/features/stepper/stepperSlice";
import { RootState } from "@/redux/store";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Editor from "../../common/editor/Editor";
export default function CreateProductForm() {
  const [thumbnail, setThumbnail] = useState<File[] | null>(null);
  const [galleryImage, setGalleryImage] = useState<File[] | null>(null);
  const dispatch = useDispatch();
  const { step } = useSelector((state: RootState) => state.stepper);
  const totalStep = 6;

  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(galleryImage, thumbnail);
    dispatch(resetStep());
  };

  return (
    <MultiStepper totalStep={totalStep}>
      <form action="#" className="min-h-[50vh]" onSubmit={onHandleSubmit}>
        {step === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-4">
            <div>
              <h5 className="font-bold text-lg">Product information</h5>
              <p className=" text-gray-700 mt-2">
                Add your product description and necessary information from here
              </p>
            </div>
            <div>
              <div className="grid sm:grid-cols-2 gap-8">
                <InputBox
                  name="title"
                  label="title"
                  placeholder="Product title"
                />
                <SelectBox
                  name="categories"
                  label="categories"
                  value=""
                  onChange={(val) => console.log("Selected:", val)}
                  options={[
                    { label: "Fruits", value: "fruits" },
                    { label: "Grocery", value: "grocery" },
                    { label: "Meat", value: "meat" },
                    { label: "Cat Food", value: "cat-food" },
                  ]}
                />
                <InputBox
                  name="product-tag"
                  label="Product tag"
                  placeholder="Tag"
                />
              </div>

              <div>
                <Label className="mb-4 mt-8">Short description</Label>
                <Editor />
              </div>
              <div>
                <Label className="mb-4 mt-8">Full description</Label>
                <Editor />
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-4 ">
            <div>
              <h5 className="text-lg font-bold">Upload images</h5>
              <p className=" text-gray-700 mt-2">
                Upload your product gallery and thumbnail image here
              </p>
            </div>
            <div className="grid sm:grid-cols-1 gap-8">
              <div className="">
                <label htmlFor="" className="mb-4 inline-block font-medium">
                  Thumbnail image
                </label>
                <DragAndDropFiles onFileChange={setThumbnail} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                  {thumbnail && (
                    <div className="relative w-fit">
                      <Image
                        src={URL.createObjectURL(thumbnail[0] as File)}
                        alt="preview"
                        width={220}
                        height={220}
                        className="rounded-md object-cover size-[220px]"
                      />
                      <button
                        className="p-1 bg-gray-200 rounded-md absolute top-2 right-2 hover:text-red-500"
                        type="button"
                        onClick={() => setThumbnail(null)}
                      >
                        <Icon
                          icon="material-symbols-light:delete-rounded"
                          width="22"
                          height="22"
                        />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                <label htmlFor="" className="mb-4 inline-block font-medium">
                  Product Gallery Image
                </label>
                <DragAndDropFiles
                  onFileChange={setGalleryImage}
                  MAX_FILES={5}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                  {galleryImage &&
                    galleryImage.length > 0 &&
                    galleryImage.map((file: File, index) => (
                      <div key={index} className="relative w-fit">
                        <Image
                          src={URL.createObjectURL(file)}
                          alt="preview"
                          width={220}
                          height={220}
                          className="rounded-md object-cover size-[220px]"
                        />
                        <button
                          className="p-1 bg-gray-200 rounded-md absolute top-2 right-2 hover:text-red-500"
                          type="button"
                          onClick={() => {
                            const filteredFiles = galleryImage.filter(
                              (_, i) => i !== index
                            );
                            setGalleryImage(
                              filteredFiles.length ? filteredFiles : null
                            );
                          }}
                        >
                          <Icon
                            icon="material-symbols-light:delete-rounded"
                            width="22"
                            height="22"
                          />
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-4">
            <div>
              <h5 className="text-lg font-bold">Inventory management</h5>
              <p className=" text-gray-700 mt-2">
                Add your inventory details here
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <InputBox
                name="sku"
                label="SKU"
                placeholder="SKU"
                onChange={(e) => console.log(e)}
              />
              <InputBox
                name="isbn"
                label="GTIN, UPC, EAN, OR ISBN"
                placeholder="978-3-16-148410-0"
              />

              <InputBox
                type="number"
                name="regular-price"
                label="Regular Price"
                placeholder="25"
                icon="$"
              />
              <InputBox
                type="number"
                name="sale-price"
                label="Sale Price"
                placeholder="20"
                icon="$"
              />

              {/* <InputBox
                name="attributes-name"
                label="Attributes Name"
                placeholder="e.g color, size"
              />
              <InputBox
                name="attribute-values"
                label="Attributes values"
                placeholder="Separate values with a vertical bar (|)"
              /> */}
              <InputBox
                type="number"
                name="initial-stock"
                label="Initial number in stock"
                placeholder="0"
              />
              <div className="capitalize ">
                <Label className="mb-4">Stock Status</Label>
                <RadioGroup defaultValue="in-stock">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="in-stock"
                      id="in-stock"
                      className="size-5"
                    />
                    <Label htmlFor="option-one">in stock</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="out-of-stock"
                      id="out-of-stock"
                      className="size-5"
                    />
                    <Label htmlFor="out-of-stock">out of stock</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="on-backorder"
                      id="on-backorder"
                      className="size-5"
                    />
                    <Label htmlFor="on-backorder">On backorder</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-10">
                <div className="flex items-center gap-x-2">
                  <Checkbox className="size-5 checkbox-t" />
                  <Label>Visible on the product page</Label>
                </div>
                <div className="flex items-center gap-x-2">
                  <Checkbox className="size-5 checkbox-t" />
                  <Label>Track Stock quantity this product</Label>
                </div>
                <div className="flex items-center gap-x-2">
                  <Checkbox className="size-5 checkbox-t" />

                  <Label>Limit purchases to 1 item per order?</Label>
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-4">
            <div>
              <h5 className="text-lg font-bold">Shipping And Taxes</h5>
              <p className=" text-gray-700 mt-2">
                Add your shipping and tax info here
              </p>
            </div>
            <div>
              <div className="grid sm:grid-cols-2 gap-8">
                <InputBox
                  type="number"
                  name="weight"
                  label="Weight (LBS)"
                  placeholder="0"
                />
                <InputBox
                  type="number"
                  name="declared-value"
                  label="Declared Value ($)"
                  placeholder="Use product's price"
                />
              </div>
              <div>
                <Label className="mb-4 mt-8">Dimensions (cm)</Label>
                <div className="grid sm:grid-cols-3 gap-8">
                  <InputBox
                    type="number"
                    name="length"
                    label=""
                    placeholder="Length"
                  />
                  <InputBox
                    type="number"
                    name="width"
                    label=""
                    placeholder="Width"
                  />
                  <InputBox
                    type="number"
                    name="Height"
                    label=""
                    placeholder="Height"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-8 mt-8">
                <SelectBox
                  name="tax-status"
                  label="Tax Status"
                  value=""
                  onChange={(val) => console.log("Selected:", val)}
                  options={[
                    { label: "Fruits", value: "fruits" },
                    { label: "Grocery", value: "grocery" },
                    { label: "Meat", value: "meat" },
                    { label: "Cat Food", value: "cat-food" },
                  ]}
                />
                <SelectBox
                  name="tax-class"
                  label="Tax class"
                  value=""
                  onChange={(val) => console.log("Selected:", val)}
                  options={[
                    { label: "Fruits", value: "fruits" },
                    { label: "Grocery", value: "grocery" },
                    { label: "Meat", value: "meat" },
                    { label: "Cat Food", value: "cat-food" },
                  ]}
                />
                <SelectBox
                  name="shipping-class"
                  label="Shipping Class"
                  value=""
                  onChange={(val) => console.log("Selected:", val)}
                  options={[
                    { label: "Fruits", value: "fruits" },
                    { label: "Grocery", value: "grocery" },
                    { label: "Meat", value: "meat" },
                    { label: "Cat Food", value: "cat-food" },
                  ]}
                />
              </div>
              <div className="flex items-center gap-x-2 mt-8">
                <Checkbox className="size-5 checkbox-t" />

                <Label>Enelope?</Label>
              </div>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-4">
            <div>
              <h5 className="text-lg font-bold">Message management</h5>
              <p className=" text-gray-700 mt-2">
                Add your custom and checkout message
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <TextBox
                label="Add a custom message"
                name="custom-message"
                placeholder="Write custom message"
              />
              <div>
                <Label className="mb-4">Upload your file</Label>{" "}
                <Input name="attachment" type="file" />
              </div>
              <TextBox
                label="Message on checkout page"
                name="checkout-message"
                placeholder="Write checkout page message"
              />
            </div>
          </div>
        )}
        {step === 6 && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-4">
            <div>
              <h5 className="text-lg font-bold">SEO management</h5>
              <p className=" text-gray-700 mt-2">
                Add your product SEO meta data
              </p>
            </div>
            <div className="grid sm:grid-cols-1 gap-8">
              <InputBox
                name="meta-title"
                label="Meta Title"
                placeholder="Meta Title"
              />
              <TextBox
                label="Meta Description"
                name="Meta Description"
                placeholder="Write meta description"
                className="min-h-30"
              />
            </div>
          </div>
        )}
        {step === totalStep && (
          <Button variant="blue" type="submit" className="ml-auto block mt-10">
            Submit
          </Button>
        )}
      </form>
    </MultiStepper>
  );
}

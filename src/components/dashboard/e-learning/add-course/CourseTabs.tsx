import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Editor from "../../common/editor/Editor"

export function CourseTabs() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="About">
        <TabsList>
          <TabsTrigger value="About">About</TabsTrigger>
          <TabsTrigger value="Overview">Overview</TabsTrigger>
          <TabsTrigger value="Course Topics">Course Topics</TabsTrigger>
          <TabsTrigger value="Speaker Profile">Speaker Profile</TabsTrigger>
          <TabsTrigger value="FAQs">FAQs</TabsTrigger>
          <TabsTrigger value="Testimonials">Testimonials</TabsTrigger>
          <TabsTrigger value="More Info">More Info</TabsTrigger>
        </TabsList>
        <TabsContent value="About">
          <Editor/>
        </TabsContent>
        <TabsContent value="Overview">
          <Editor/>
        </TabsContent>
        <TabsContent value="Course Topics">
          <Editor/>
        </TabsContent>
        <TabsContent value="Speaker Profile">
          <Editor/>
        </TabsContent>
        <TabsContent value="FAQs">
          <Editor/>
        </TabsContent>
        <TabsContent value="Testimonials">
          <Editor/>
        </TabsContent>
        <TabsContent value="More Info">
          <Editor/>
        </TabsContent>
      </Tabs>
    </div>
  )
}

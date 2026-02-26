import { notFound } from "next/navigation";
import { projectDetails } from "@/app/data/projectDetails";
import ProjectArticle from "@/app/projectArticle";

export async function generateStaticParams() {
  return projectDetails.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectDetails.find((p) => p.slug === slug);
  if (!project) notFound();

  return <ProjectArticle project={project} />;
}

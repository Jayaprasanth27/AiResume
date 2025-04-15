import React, { forwardRef } from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TemplateFour = forwardRef(({ resume }, ref) => {
    const {
        name,
        jobRole,
        profileSummary,
        contact,
        socialLinks,
        experience,
        education,
        projects,
        techSkills,
        achievements,
    } = resume;

    return (
        <div className="max-w-5xl mx-auto bg-background border border-dashed rounded-lg">
            <div ref={ref} className="grid grid-cols-3 gap-6 p-6">
                {/* Left Column with Personal Info */}
                <div className="col-span-1 space-y-6 p-4 bg-muted rounded-lg">
                    {/* Name & Role */}
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className="text-lg text-muted-foreground">{jobRole}</p>
                    </div>
                    <Separator />

                    {/* Contact Info */}
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Contact</h2>
                        <Separator />
                        <div className="space-y-2 text-muted-foreground text-sm">
                            <p className="flex items-center gap-2">
                                <Mail className="w-4 h-4" /> {contact?.email || "N/A"}
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="w-4 h-4" /> {contact?.phone || "N/A"}
                            </p>
                            <p className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> {contact?.location || "N/A"}
                            </p>
                        </div>
                    </div>
                    <Separator />

                    {/* Social Links */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Social Links</h2>
                        <Separator />
                        <div className="space-y-2">
                            {socialLinks?.map((link, index) => {
                                const { title, url } = link || {}; // Deconstruct safely
                                return url ? (
                                    <p key={index} className="flex items-center gap-2">
                                        <Globe className="w-4 h-4" />
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600/80 hover:underline text-sm"
                                        >
                                            {title || "Untitled"}
                                        </a>
                                    </p>
                                ) : null; // Skip if url is missing
                            })}
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Skills</h2>
                        <Separator />
                        <div className="flex flex-wrap gap-2 mt-2">
                            {typeof techSkills === "string"
                                ? techSkills.split(",").map((skill, index) => (
                                    <Badge key={index} variant="secondary">
                                        {skill.trim()}
                                    </Badge>
                                ))
                                : <p className="text-sm text-muted-foreground">No skills provided</p>}
                        </div>
                    </div>
                </div>

                {/* Right Column with Main Content */}
                <div className="col-span-2 space-y-6">
                    {/* Profile Summary */}
                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent>
                            <h2 className="text-2xl font-semibold mb-2">Profile Summary</h2>
                            <p className="text-muted-foreground">{profileSummary || "No summary provided."}</p>
                        </CardContent>
                    </Card>
                    <Separator />

                    {/* Experience */}
                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent>
                            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                            {Array.isArray(experience) && experience.length > 0 ? (
                                experience.map((exp, index) => {
                                    const { jobRole, companyName, startDate, endDate, description } = exp || {};
                                    return jobRole && companyName ? (
                                        <div key={index} className="space-y-2 mb-4">
                                            <h3 className="font-bold text-base">
                                                {jobRole} - {companyName}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {startDate || "N/A"} - {endDate || "Present"}
                                            </p>
                                            <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                                                {description?.split("/").map((desc, i) => (
                                                    <li key={i}>{desc || "No details available"}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : null; // Skip invalid entries
                                })
                            ) : (
                                <p className="text-sm text-muted-foreground">No experience available</p>
                            )}
                        </CardContent>
                    </Card>
                    <Separator />

                    {/* Education */}
                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent>
                            <h2 className="text-2xl font-semibold mb-2">Education</h2>
                            {education?.map((edu, index) => (
                                <div key={index} className="space-y-1 mb-4">
                                    <h3 className="font-bold text-base">{edu.universityName}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {edu.degreeTitle} • {edu.startYear} - {edu.endYear}
                                    </p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    <Separator />

                    {/* Projects */}
                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent>
                            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                            {Array.isArray(projects) && projects.length > 0 ? (
                                projects.map((proj, index) => {
                                    const { title, startDate, endDate, description } = proj || {};
                                    return title ? (
                                        <div key={index} className="space-y-1 mb-4">
                                            <h3 className="font-bold text-base">{title}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {startDate || "N/A"} - {endDate || "Present"}
                                            </p>
                                            <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                                                {description?.split("/").map((desc, i) => (
                                                    <li key={i}>{desc || "No details available"}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : null; // Skip invalid projects
                                })
                            ) : (
                                <p className="text-sm text-muted-foreground">No projects available</p>
                            )}
                        </CardContent>
                    </Card>

                    <Separator />

                    {/* Achievements */}
                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent>
                            <h2 className="text-2xl font-semibold mb-2">Achievements</h2>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {achievements?.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
});

export default TemplateFour;
import React, { forwardRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Award, Briefcase } from "lucide-react";

const TemplateThree = forwardRef(({ resume }, ref) => {
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
        courses,
    } = resume;

    return (
        <div className="max-w-6xl mx-auto bg-background border border-dashed rounded-lg">
            <div ref={ref} className="p-6 space-y-8">

                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold">{name}</h1>
                    <p className="text-lg text-muted-foreground">{jobRole}</p>
                </div>
                <Separator />

                {/* Profile Summary */}
                <Card className="border-none shadow-none bg-transparent">
                    <CardContent>
                        <h2 className="text-2xl font-semibold mb-2">Profile Summary</h2>
                        <p className="text-muted-foreground">{profileSummary}</p>
                    </CardContent>
                </Card>
                <Separator />

                {/* Contact and Social Links */}
                <div className="grid grid-cols-2 gap-6">
                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="space-y-2">
                            <h2 className="text-2xl font-semibold">Contact</h2>
                            <Separator />
                            <p className="flex items-center gap-2 text-muted-foreground">
                                <Mail className="size-4" /> {contact.email}
                            </p>
                            <p className="flex items-center gap-2 text-muted-foreground">
                                <Phone className="size-4" /> {contact.phone}
                            </p>
                            <p className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="size-4" /> {contact.location}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-none bg-transparent">
                        <CardContent className="space-y-2">
                            <h2 className="text-2xl font-semibold">Social Links</h2>
                            <Separator />
                            {socialLinks?.map((link, index) => (
                                <p key={index} className="flex items-center gap-2">
                                    <Globe className="size-4" />
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600/80 hover:underline"
                                    >
                                        {link.title}
                                    </a>
                                </p>
                            ))}
                        </CardContent>
                    </Card>
                </div>
                <Separator />

                {/* Experience */}
                <Card className="border-none shadow-none bg-transparent">
                    <CardContent>
                        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                        {experience?.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="font-bold">{exp.jobRole} - {exp.companyName}</h3>
                                <p className="text-muted-foreground text-sm">
                                    {exp.startDate} - {exp.endDate}
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground">
                                    {exp.description?.split("/").map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Separator />

                {/* Education */}
                <Card className="border-none shadow-none bg-transparent">
                    <CardContent>
                        <h2 className="text-2xl font-semibold mb-2">Education</h2>
                        {education?.map((edu, index) => (
                            <div key={index} className="mb-2">
                                <h3 className="font-bold">{edu.universityName}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {edu.degreeTitle} ({edu.startYear} - {edu.endYear})
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
                        {projects?.map((proj, index) => (
                            <div key={index} className="mb-4">
                                <h3 className="font-bold">{proj.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {proj.startDate} - {proj.endDate || "Present"}
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground">
                                    {proj.description?.split("/").map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Separator />

                {/* Achievements */}
                <Card className="border-none shadow-none bg-transparent">
                    <CardContent>
                        <h2 className="text-2xl font-semibold mb-2">Achievements</h2>
                        <ul className="list-disc list-inside text-muted-foreground">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <Award className="size-4" /> {achievement}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Separator />

                {/* Skills */}
                <Card className="border-none shadow-none bg-transparent">
                    <CardContent>
                        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {techSkills?.split(",").map((skill, index) => (
                                <Badge key={index} variant={"secondary"}>
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
});

export default TemplateThree;
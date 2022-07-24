import { PrismaClient } from '@prisma/client';
import type projectModel from './models/projectModel';
import type aboutModel from './models/aboutModel';

const prisma = new PrismaClient();

const adminUsername: string = import.meta.env.VITE_ADMIN_USERNAME;
const adminPassword: string = import.meta.env.VITE_ADMIN_PASSWORD;

export async function checkUser(user: { username: string; password: string }) {
	const { username, password } = user;

	if (username === adminUsername && password === adminPassword) {
		return true;
	}

	return false;
}

export async function getProjects() {
	const projects = await prisma.project.findMany();

	return projects;
}

export async function getProjectById(id: projectModel['id']) {
	const project = await prisma.project.findUnique({
		where: {
			id
		}
	});

	return project;
}

export async function createProject(project: projectModel) {
	await prisma.project
		.create({
			data: project
		})
		.catch((error) => {
			throw error;
		});
}

export async function editProject(project: projectModel) {
	await prisma.project
		.update({
			where: {
				id: project.id
			},
			data: project
		})
		.catch((error) => {
			throw error;
		});
}

export async function deleteProject(id: projectModel['id']) {
	await prisma.project
		.delete({
			where: {
				id
			}
		})
		.catch((error) => {
			throw error;
		});
}

export async function getSocials() {
	const socials = await prisma.social_media.findMany();

	return socials;
}

export async function getResume() {
	const about = await prisma.resume.findFirst();

	return about;
}

export async function editResume(resume: aboutModel) {
	await prisma.resume
		.updateMany({
			data: resume
		})
		.catch((error) => {
			throw error;
		});
}

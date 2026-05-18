import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {

  try {

    const generation = await db.generation.findFirst({
      where: {
        shareId: params.id,
        isPublic: true,
      },
    });

    if (!generation) {
      return NextResponse.json(
        { error: "Generation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(generation);

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );

  }

}
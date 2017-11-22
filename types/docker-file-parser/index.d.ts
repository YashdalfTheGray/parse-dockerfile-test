declare module "docker-file-parser" {
    export interface CommandEntry {
        name: string;
        args: string[];
        lineno: number;
        raw: string;
        error?: Error;
    }

    export interface ParseOptions {
        includeComments: boolean;
    }

    export function parse(
        contents: string,
        options?: ParseOptions
    ): CommandEntry[];
}

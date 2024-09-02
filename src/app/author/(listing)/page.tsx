"use client";
import type {Author} from "@/types";
import {Grid, Stack} from "@mantine/core";
import {useAuthorsGetAllApi} from "@/hooks/authors";
import AuthorPreview from "@/components/author/AuthorPreview";
import Breadcrumb from "@/common/components/Breadcrumb";
import React, {useState} from "react";
import {useDebounce} from "use-debounce";
import ListToolbar from "@/common/components/ListToolbar";
import NotFound from "@/components/NotFound";

export default function Home() {
  // TODO: refactor
  const [searchString, setSearchString] = useState<string>("");
  const [debouncedSearch] = useDebounce(searchString, 300);
  const { isLoading, data: authors } = useAuthorsGetAllApi({
    search: debouncedSearch,
  });

    const renderAuthorsListSection = () => {
        if (isLoading) {
            return (
                <Grid
                    gutter={{
                        base: 30,
                        md: 50,
                        xl: 60,
                    }}
                >
                    <Grid.Col>
                        <AuthorPreview.Loading />
                    </Grid.Col>
                    <Grid.Col>
                        <AuthorPreview.Loading />
                    </Grid.Col>
                    <Grid.Col>
                        <AuthorPreview.Loading />
                    </Grid.Col>
                    <Grid.Col>
                        <AuthorPreview.Loading />
                    </Grid.Col>
                    <Grid.Col>
                        <AuthorPreview.Loading />
                    </Grid.Col>
                    <Grid.Col>
                        <AuthorPreview.Loading />
                    </Grid.Col>
                    <Grid.Col>
                        <AuthorPreview.Loading />
                    </Grid.Col>
                </Grid>
            )
        }
        if (authors?.length === 0) return <NotFound />
        return (
            <Grid
                gutter={{
                    base: 30,
                    md: 50,
                    xl: 60,
                }}
            >
                {authors?.map((author: Author) => (
                    <Grid.Col
                        span={{
                            base: 12,
                            md: 3,
                            lg: 3,
                            xl: 3,
                            sm: 4,
                            xs: 6,
                        }}
                        key={author.id}
                    >
                        <AuthorPreview author={author} />
                    </Grid.Col>
                ))}
            </Grid>
        )
    }


    return (
    <Stack maw={768} mx="auto">
      <Breadcrumb
        items={[
          {
            title: "Authors",
            href: "/author",
          },
        ]}
      />
      <ListToolbar
        searchString={searchString}
        setSearchString={setSearchString}
      />
      {renderAuthorsListSection()}
    </Stack>
  );
}

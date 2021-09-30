docker build --no-cache -f SQL\Dockerfile.PostgreSql -t flexberrybooksclub/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t flexberrybooksclub/app ../..

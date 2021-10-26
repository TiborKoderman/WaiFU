create table guild(
    id BIGINT primary key,
    name varchar(100) not null,
    xp int not null default 0,
)

create table member_of_guild(
    member_id BIGINT,
    guild_id BIGINT,
    xp int not null,
    social_credit int not null,
    admin boolean default false,
    owner boolean default false,
    
    

    foregin key member_id references member(member_id),
    foregin key guild_id references guild(guild_id),
)

create table member(
    id BIGINT primary key,
    nicknake varchar(20) not null,
    username varchar(20) not null,
    xp int not null default 0,
    based_cnt int not null


)

create table pills(
    id int primary key,
    content varchar()
)
